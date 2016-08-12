'use strict'
const models = require('../models/index')
const MapboxClient = require('mapbox')
const mapbox = new MapboxClient(process.env.MAPBOX_TOKEN)
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Friday']

function create (request, reply) {
  
  mapbox.geocodeForward(request.payload.address, (err, res) => {
    if (err) reply(err)
    return models.Activity.create({
      name: request.payload.name,
      address: request.payload.address,
      contact: request.payload.contact,
      link: request.payload.link,
      lat: res.features[0].geometry.coordinates[0],
      long: res.features[0].geometry.coordinates[1]
    })
    .then(activity => reply(activity.dataValues))
    .catch((err) => reply(err))
  })
}

module.exports = {
  create
}
