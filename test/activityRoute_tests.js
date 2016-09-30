/* global describe it after*/
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const models = require('../app/models/index')

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
        data.id = res.body.id
        expect(res.body).to.be.an('object')
        expect(res.body.name).to.eql('Chef Yamashita')
        expect(res.body.address).to.eql('1 Tanjong Pagar Plaza #02-44 Singapore 082001')
        expect(res.body.contact).to.eql('+65 98282057')
        expect(res.body.link).to.eql('http://www.burpple.com/chef-yamashita')
        done()
      })
  })

  after((done) => {
    models.Activity.destroy({where: {id: data.id}}).then(() => done())
  })
})
