'use strict'
module.exports = function (sequelize, DataTypes) {
  const Marker = sequelize.define('Marker', {
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Marker.belongsTo(models.Session, {hooks: true})
      }
    }
  })
  return Marker
}
