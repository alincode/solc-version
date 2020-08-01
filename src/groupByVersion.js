module.exports = groupByVersion

function filterCondition(x) {
  return !~x.indexOf('v0.5.') && !~x.indexOf('v0.6.') && !~x.indexOf('v0.7.')
}

function removeAllZeroPointFiveVersion(select) {
  select.nightly = select.nightly.filter((x) => filterCondition(x))
  select.all = select.all.filter((x) => filterCondition(x))
  select.releases = select.releases.filter((x) => filterCondition(x))
}

function groupByVersion(data, skip5 = true) {
  const { releases, nightly, all } = data
  let select = {}
  select.nightly = Object.keys(nightly).reverse()
  select.all = Object.keys(all).reverse()
  select.releases = Object.keys(releases).reverse()
  if (skip5) removeAllZeroPointFiveVersion(select)
  return select
}
