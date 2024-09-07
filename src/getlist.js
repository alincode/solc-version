const baseURL = 'https://solc-bin.ethereum.org/bin'

const { promiseAjax } = require('ajax-caching')

module.exports = getlist

async function getlist() {
    const opts = {
      url: `${baseURL}/list.json`,
      caching: true,
      transform: function(data) {
        if (data.releases) throw Error('get list fail')
        return data
      },
    }
    return promiseAjax(opts)
}
