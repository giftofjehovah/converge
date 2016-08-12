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
        OpeningHour.belongsTo(models.Activity)
      },
      parseTime: function (openingHours) {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        return days.reduce((prev, current) => {
          const timing = openingHours[current].split(' to ')
          prev[current] = {}
          prev[current]['openingHour'] = timing[0]
          prev[current]['closingHour'] = timing[1]
          return prev
        }, {})
      }
    }
  })
  return OpeningHour
}
