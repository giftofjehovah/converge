'use strict'
const Hapi = require('hapi')
const server = new Hapi.Server()
const models = require('./app/models/index')
const staticRoutes = require('./app/routes/staticRoutes')
// Create a server with a host and port
server.connection({
  port: process.env.PORT || 3000
})

server.register(require('inert'), (err) => {
  if (err) throw err
  server.route(staticRoutes)
})

// Add the route

// Start the server
models.sequelize.sync().then(() => {
  server.start((err) => {
    if (err) throw err
    console.log('Server running at:', server.info.uri)
  })
})

module.exports = server
