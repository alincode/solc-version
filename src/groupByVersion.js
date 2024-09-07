module.exports = groupByVersion

function filterCondition(x) {
  return !/v0\.[5-8]\./.test(x)
}

function filterVersions(select) {
  ['nightly', 'all', 'releases'].forEach((key) => {
    select[key] = select[key].filter(filterCondition)
  })
}

function groupByVersion(data, skip5 = true) {
  const { releases, nightly, all } = data

  let select = {
    nightly: Object.keys(nightly).reverse(),
    all: Object.keys(all).reverse(),
    releases: Object.keys(releases).reverse(),
  }

  if (skip5) filterVersions(select)

  return select
}