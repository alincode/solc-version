const processList = require('./processList')
const getlist = require('./getlist')
const groupByVersion = require('./groupByVersion')

module.exports = versionsSkipVersion5

async function versionsSkipVersion5() {
  try {
    let data = await getlist()
    let select = groupByVersion(processList(data), true)
    return select
  } catch (error) {
    throw error
  }
}