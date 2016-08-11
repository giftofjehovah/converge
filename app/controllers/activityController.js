'use strict'
const models = require('../models/index')

function create (request, reply) {
  const parsePostal = /\d\d\d\d\d\d/
  let postal = request.payload.address.match(parsePostal)[0]
  console.log(postal)
  reply(request.payload)
}

module.exports = {
  create
}
