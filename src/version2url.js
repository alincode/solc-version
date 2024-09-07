const baseURL = 'https://solc-bin.ethereum.org/bin'
const getlist = require('./getlist')
const processList = require('./processList')

module.exports = version2url

async function version2url(version, list) {
  try {
    const data = list || await getlist()
    const { all, releases } = processList(data)

    if (version === 'stable' || version === 'latest' || version === 'nightly') {
      version = Object.keys(version === 'stable' ? releases : all).reverse()[0]
    }

    const path = all[version]

    if (!path) {
      throw new Error(`unknown version: ${version}`)
    }

    return `${baseURL}/${path}`
  } catch (error) {
    throw error
  }
}