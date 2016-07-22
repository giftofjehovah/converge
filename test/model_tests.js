/* global describe it before after*/
const expect = require('chai').expect
const models = require('../app/models/index')

describe('Session model', function () {
  before((done) => {
    models.Session.create({link: 'testing'}).then(() => done())
  })
  it('should return the link', (done) => {
    models.Session.findOne({where: {link: 'testing'}})
      .then((session) => {
        expect(session.link).to.equal('testing')
        done()
      })
  })
  after(() => {
    models.Session.findOne({where: {link: 'testing'}})
      .then((session) => session.destroy())
  })
})
