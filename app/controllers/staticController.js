
function index (request, reply) {
  reply.file('./app/public/index.html')
}

module.exports = {
  index: index
}
