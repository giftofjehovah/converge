const staticController = require('../controllers/staticController')
const routes = []

const indexRoute = {
  method: 'GET',
  path: '/',
  handler: staticController.index
}

routes.push(indexRoute)
module.exports = routes
