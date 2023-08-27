const baseURL = 'https://solc-bin.ethereum.org/bin'

const processList = require('./processList')
const getlist = require('./getlist')

module.exports = version2url

function version2url(version, list) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = list ? list : await getlist()
      let select = processList(data)
      const { all, releases } = select
      if (version === 'stable') {
        version = Object.keys(releases).reverse()[0]
      }
      if (version === 'latest' || version === 'nightly') {
        version = Object.keys(all).reverse()[0]
      }

      var path = all[version]
      if (!path) return reject(new Error(`unknown version: ${version}`))
      resolve(`${baseURL}/${path}`)
    } catch (error) {
      reject(error)
    }
  })
}
