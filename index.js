var https = require('follow-redirects').https

module.exports = function (callback) {
  https.get(
    {
      headers: { 'user-agent': 'node-geo-tz' },
      host: 'api.github.com',
      path: '/repos/evansiroky/timezone-boundary-builder/releases/latest'
    },
    function (res) {
      var data = ''
      res.on('data', function (chunk) {
        data += chunk
      })
      res.on('end', function () {
        data = JSON.parse(data)
        callback(null, data)
      })
    }
  ).on('error', callback)
}
