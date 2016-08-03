/* global describe it*/
const supertest = require('supertest')
const api = supertest('http://localhost:3000')
// require('../server').start()

describe('GET /', () => {
  it('should return a 200', (done) => {
    api.get('/').expect(200, done)
  })
})
