/* global describe it before after*/
const expect = require('chai').expect
const models = require('../app/models/index')
models.sequelize.sync()

describe('Marker model', function () {
  before((done) => {
    models.Marker.create({lat: 1.2790176, long: 103.8414031}).then(() => done())
  })
  it('should return the link', (done) => {
    models.Marker.find({where: {lat: 1.2790176, long: 103.8414031}})
    .then((marker) => {
      expect(marker.lat).to.equal(1.2790176)
      expect(marker.long).to.equal(103.8414031)
      done()
    })
  })
  after((done) => {
    models.Marker.destroy({where: {lat: 1.2790176, long: 103.8414031}}).then(() => done())
  })
})
