const formatDate = (dateString) => {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('.').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return `${date.getUTCFullYear()}.${String(date.getUTCMonth() + 1).padStart(2, '0')}.${String(date.getUTCDate()).padStart(2, '0')}`;
};

const createEntry = (version, type, date, path) => [`v${version}-${type}-${date}`, path];

const processEntry = (entry, prevDate) => {
  const { path, prerelease, version } = entry;
  let date, type;

  if (prerelease) {
    date = prerelease.split('nightly.')[1];
    type = 'nightly';
  } else {
    const nextDate = prevDate || date;
    if (date && nextDate && nextDate !== date) {
      const d1 = new Date(date.replace(/\./g, '-'));
      const d2 = new Date(nextDate.replace(/\./g, '-'));
      const middleDate = new Date((d1.getTime() + d2.getTime()) / 2);
      date = formatDate(middleDate.toISOString().split('T')[0].replace(/-/g, '.'));
    } else {
      date = nextDate || date;
    }
    type = 'stable';
  }

  date = date ? formatDate(date) : '';
  return { entry: createEntry(version, type, date, path), type, date };
};

const processList = (json) => {
  const data = JSON.parse(json);
  const builds = Object.values(data.builds);

  const lists = builds.reduce((acc, build, index, array) => {
    // 修改這裡來正確處理 prevDate
    let prevDate = null;
    if (index > 0) {
      for (let i = index - 1; i >= 0; i--) {
        if (array[i].prerelease) {
          prevDate = array[i].prerelease.split('nightly.')[1];
          break;
        }
      }
    }
    
    const { entry, type, date } = processEntry(build, prevDate);

    if (entry[0] && entry[1]) {  // Only add valid entries
      if (!acc[type]) acc[type] = [];
      type === 'stable' ? acc['releases'].push(entry) : acc[type].push(entry);
      if (!acc.all) acc.all = [];
      acc.all.push(entry);
    }
    return acc;
  }, { releases: [], nightly: [], all: [] });

  return Object.fromEntries(
    Object.entries(lists).map(([key, value]) => [key, Object.fromEntries(value)])
  );
};

module.exports = processList;