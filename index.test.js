var assert = require('assert')

var nock = require('nock')

var main = require('./')

describe('index', function () {
  it('should dl', function (done) {
    var latestRepoMock = {
      assets: [
        {
          browser_download_url: 'https://github.com/evansiroky/timezone-boundary-builder/releases/download/2016d/timezones.geojson.zip'
        }
      ]
    }

    var githubApiScope = nock('https://api.github.com')
      .get('/repos/evansiroky/timezone-boundary-builder/releases/latest')
      .reply(200, JSON.stringify(latestRepoMock))

    main(function (err, data) {
      assert.equal(err, null)
      assert.equal(data.assets[0].browser_download_url, 'https://github.com/evansiroky/timezone-boundary-builder/releases/download/2016d/timezones.geojson.zip')
      done()
    })
  })
})
