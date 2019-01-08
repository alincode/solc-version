const processList = require('./processList');
const getlist = require('./getlist');
const groupByVersion = require('./groupByVersion');

module.exports = versions;

function versions() {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await getlist();
      let select = groupByVersion(processList(data), false);
      resolve(select);
    } catch (error) {
      reject(error);
    }
  });
}