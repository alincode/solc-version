const processList = require('./processList')
const getlist = require('./getlist')
const groupByVersion = require('./groupByVersion')

module.exports = versions

async function versions(list) {
  try {
    const data = list || await getlist()
    const select = groupByVersion(processList(data), false)
    return select
  } catch (error) {
    throw error
  }
}
