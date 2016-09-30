
function random1to10 () {
  return Math.floor(Math.random() * 10) + 1
}

function random1to1000 () {
  return random1to10() * random1to10() * random1to10()
}

module.exports = {
  random1to1000: random1to1000
}
