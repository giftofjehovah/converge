'use strict'
const adjNoun = require('adj-noun')
const superb = require('superb')

function generateLink (request, reply) {
  let superWord = superb()
  adjNoun.seed(random1to1000())
  adjNoun.adjPrime(random1to1000())
  adjNoun.nounPrime(random1to1000())
  let randomWord = adjNoun().join('-')
  reply({link: `${superWord}-${randomWord}`})
}

module.exports = {
  generateLink: generateLink
}

function random1to10 () {
  return Math.floor(Math.random() * 10) + 1
}

function random1to1000 () {
  return random1to10() * random1to10() * random1to10()
}
