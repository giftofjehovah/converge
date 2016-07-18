'use strict'

// ROLLBAR - include and initialize the rollbar library with your access token
const rollbar = require('rollbar')
rollbar.init('cc48181936bf4278a804884acd0ae6a5')

const Hapi = require('hapi')
const server = new Hapi.Server()

// Create a server with a host and port
server.connection({
  host: 'localhost',
  port: 3000
})

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var data = {
      key: 'value'
    }
    reply(data)
  }
})
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    return reply('hello world')
  }
})

// Start the server
server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})
