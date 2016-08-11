/* global describe it before after*/
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
// const models = require('../app/models/index')

describe('POST /activities', () => {
  const data = {
    name: 'Chef Yamashita',
    address: '1 Tanjong Pagar Plaza #02-44 Singapore 082001',
    openingHours: {
      Monday: '7am to 12am',
      Tuesday: '8am to 12am',
      Wednesday: 'closed',
      Thursday: '8am to 12am',
      Friday: '8am to 12am',
      Saturday: '8am to 12am',
      Sunday: '8am to 12am'
    },
    contact: '+65 98282057',
    link: 'http://www.burpple.com/chef-yamashita'
  }
  it('should return 200 and an object', (done) => {
    api.post('/activities')
      .send(data)
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        expect(res.body).to.be.an('object')
        expect(res.body).to.deep.eql(data)
        done()
      })
  })

// after((done) => {
//   models.Session.destroy({where: {link: link}}).then(() => done())
// })
})
