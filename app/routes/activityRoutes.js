'use strict'
const activityController = require('../controllers/activityController')

const createActivities = {
  method: 'POST',
  path: '/activities',
  handler: activityController.create
}

module.exports = [createActivities]
