/* global describe it before after*/
const expect = require('chai').expect
const models = require('../app/models/index')
models.sequelize.sync()

describe('Session model', function () {
  before((done) => {
    models.Session.create({link: 'testing'}).then(() => done())
  })
  it('linke should be in the database', (done) => {
    models.Session.findOne({where: {link: 'testing'}})
    .then((session) => {
      expect(session.link).to.equal('testing')
      done()
    })
  })
  it('should be unique', (done) => {
    models.Session.create({link: 'testing'})
    // .then((session) => console.log(session))
    .catch((err) => {
      expect(err.errors[0].message).to.equal('link must be unique')
      done()
    })
  })
  after((done) => {
    models.Session.destroy({where: {link: 'testing'}}).then((session) => done())
  })
})

describe('Session model generateLink function', function () {
  it('should return a string', (done) => {
    expect(models.Session.generateLink()).to.be.a('string')
    done()
  })
})
