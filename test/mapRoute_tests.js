/* global describe it before after*/
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const models = require('../app/models/index')

describe('POST /maps', () => {
  let link = ''
  before((done) => {
    models.sequelize.sync().then(() => done())
  })

  // it('should return a 200', (done) => {
  //   api.post('/maps')
  //   .expect(200, done)
  // })

  it('should return an object', (done) => {
    api.post('/maps')
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      link = res.body.link
      expect(res.body).to.be.an('object')
      done()
    })
  })

  after((done) => {
    models.Session.destroy({where: {link: link}}).then(() => done())
  })
})

describe('GET /maps/:link', () => {
  let link = ''
  before((done) => {
    api.post('/maps')
    .end((err, res) => {
      if (err) throw err
      link = res.body.link
      done()
    })
  })

  it('should be able to return generated link', (done) => {
    api.get(`/maps/${link}`)
    .end((err, res) => {
      if (err) throw err
      expect(res.body.session).to.equal(link)
      done()
    })
  })

  after((done) => {
    models.Session.destroy({where: {link: link}}).then(() => done())
  })
})

describe('POST /maps/:link', () => {
  let link = ''
  before((done) => {
    api.post('/maps')
    .end((err, res) => {
      if (err) throw err
      link = res.body.link
      done()
    })
  })

  it('should return 200', function (done) {
    api.post(`/maps/${link}`)
    .send({lat: 1.2790176, long: 103.8414031})
    .expect(200, done)
  })

  after((done) => {
    models.Session.destroy({where: {link: link}}).then(() => done())
  })
})
