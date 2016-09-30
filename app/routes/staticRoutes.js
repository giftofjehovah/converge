const staticController = require('../controllers/staticController')

const indexRoute = {
  method: 'GET',
  path: '/',
  handler: staticController.index
}

module.exports = [indexRoute]
