// include and initialize the rollbar library with your access token
var rollbar = require('rollbar')
rollbar.init('cc48181936bf4278a804884acd0ae6a5')

// record a generic message and send to rollbar
rollbar.reportMessage('Hello world!')
