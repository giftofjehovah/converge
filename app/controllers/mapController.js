'use strict'
const models = require('../models/index')

function generateLink (request, reply) {
  const randomLink = models.Session.generateLink()
  models.Session.create({link: randomLink})
  .then(session => reply({link: session.link}))
  .catch(err => reply(err))
}

function getMap (request, reply) {
  models.Session.findOne({where: {link: request.params.link}})
  .then(session => reply({session: session.link}))
  .catch(err => reply(err))
}

function postLocation (request, reply) {
  let _session
  models.Session.findOne({where: {link: request.params.link}})
  .then(session => {
    _session = session
    return models.Marker.create({lat: request.payload.lat, long: request.payload.long})
  })
  .then(marker => _session.addMarkers(marker))
  .then(marker => reply({message: 'added marker successfully'}))
  .catch(err => reply(err))
}

function calculateMidPoint (request, reply) {

}

module.exports = {
  generateLink,
  getMap,
  postLocation,
  calculateMidPoint
}
