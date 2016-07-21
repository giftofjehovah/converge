/* global describe it */
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
require('../server').start()

describe('GET index page', () => {
  it('should return a 200', (done) => {
    api.get('/').expect(200, done)
  })
})

describe('POST /maps', () => {
  it('should return a 200', (done) => {
    api.post('/maps')
      .set('Accept', 'application/json')
      .expect(200, done)
  })

  it('should return an object', (done) => {
    api.post('/maps')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return err
        expect(res.body).to.be.an('object')
        done()
      })
  })
})

// describe('GET /hello', (done) => {
//   it("returns 'hello world' at GET /hello", () => {
//     api.get('/hello')
//       .set('Accept', 'application/json')
//       .end((err, res) => {
//         if (err) return err
//         expect(res.body).to.eq({msg: 'hello world'})
//         done()
//       })
//   })
// })
