'use strict'
module.exports = function (sequelize, DataTypes) {
  const OpeningHour = sequelize.define('OpeningHour', {
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
        return days.map((day) => {
          const newTime = {}
          const timing = openingHours[day].split(' to ')
          newTime.day = day
          newTime.openingHour = timing[0]
          newTime.closingHour = timing[1]
          return newTime
        })
      }
    }
  })
  return OpeningHour
}
