'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()

// Create a server with a host and port
server.connection({
  port: process.env.PORT || 3000
})

server.register(require('inert'), (err) => {
  if (err) throw err
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./public/index.html')
    }
  })
})

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply({msg: 'hello world'})
  }
})

// Start the server
server.start((err) => {
  if (err) throw err
  console.log('Server running at:', server.info.uri)
})

module.exports = server
