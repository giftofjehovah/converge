const mapController = require('../controllers/mapController')

const generateLink = {
  method: 'POST',
  path: '/maps',
  handler: mapController.generateLink
}

module.exports = [generateLink]
