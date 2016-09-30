'use strict'
module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define('Activity', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    openingHours: DataTypes.STRING,
    contact: DataTypes.STRING,
    link: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Activity.belongsToMany(models.Session, {
          through: 'SessionActivity',
          onDelete: 'CASCADE'
        })
        Activity.belongsToMany(models.Tag, {
          through: 'ActivityTag',
          onDelete: 'CASCADE'
        })
        Activity.hasMany(models.OpeningHour, {onDelete: 'cascade', hooks: true})
      }
    }
  })
  return Activity
}
