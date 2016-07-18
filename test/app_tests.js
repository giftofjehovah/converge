/* global describe it */

const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
const server = require('../server')

describe('GET /', (done) => {
  it("should return status 200'", () => {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
  })
})

describe('GET /hello', (done) => {
  it("returns 'hello world' at GET /hello", () => {
    api.get('/hello')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return err
        expect(res.body).to.eq('hello world')
        done()
      })
  })
})

// describe('GET /candies', function (done) {
//   it('should return a 200 response', function () {
//     api.get('/candies')
//       .set('Accept', 'application/json')
//       .expect(200, done)
//   })
//
//   it('should return an array', function (done) {
//     api.get('/candies')
//       .set('Accept', 'application/json')
//       .end(function (error, response) {
//         Candy.find(function (err, candies) {
//           expect(response.body.length).to.eq(candies.length)
//           done()
//         })
//       })
//   })
