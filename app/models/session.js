'use strict'
const adjNoun = require('adj-noun')
const superb = require('superb')
const helper = require('../helper')

module.exports = function (sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Session.hasMany(models.Marker)
        Session.belongsToMany(models.Activity, {
          through: 'SessionActivity',
          onDelete: 'CASCADE'
        })
      },
      generateLink: function () {
        let superWord = superb()
        adjNoun.seed(helper.random1to1000())
        adjNoun.adjPrime(helper.random1to1000())
        adjNoun.nounPrime(helper.random1to1000())
        let randomWord = adjNoun().join('-')
        return `${superWord}-${randomWord}`
      }
    }
  })
  return Session
}
