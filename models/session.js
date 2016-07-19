'use strict'
module.exports = function (sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Session.hasMany(models.Marker)
      }
    }
  })
  return Session
}
