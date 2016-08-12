'use strict'
module.exports = function (sequelize, DataTypes) {
  var OpeningHour = sequelize.define('OpeningHour', {
    day: DataTypes.STRING,
    openingHour: DataTypes.STRING,
    closingHour: DataTypes.STRING,
    ActivityId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return OpeningHour
}
