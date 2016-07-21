'use strict'
const models = require('../models/index')

function generateLink (request, reply) {
  let randomLink = models.Session.generateLink()
  models.Session.create({link: randomLink})
    .then((session) => {
      reply({link: session.link})
    })
}

module.exports = {
  generateLink: generateLink
}
