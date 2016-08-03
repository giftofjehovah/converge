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
  console.log(request.payload.lat, request.payload.long)
  models.Session.findOne({where: {link: request.params.link}})
  .then(session => reply({session: session.link}))
  .catch(err => reply(err))
}

module.exports = {
  generateLink: generateLink,
  getMap: getMap,
  postLocation: postLocation
}
