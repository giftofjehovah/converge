'use strict'
const mapController = require('../controllers/mapController')

const generateLink = {
  method: 'POST',
  path: '/maps',
  handler: mapController.generateLink
}

const getMap = {
  method: 'GET',
  path: '/maps/{link}',
  handler: mapController.getMap
}

module.exports = [generateLink, getMap]
