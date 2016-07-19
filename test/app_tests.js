/* global describe it */
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
require('../server')

describe('GET /hello', (done) => {
  it("returns 'hello world' at GET /hello", () => {
    api.get('/hello')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return err
        expect(res.body).to.eq({msg: 'hello world'})
        done()
      })
  })
})
