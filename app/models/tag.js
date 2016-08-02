'use strict'
module.exports = function (sequelize, DataTypes) {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Tag.belongsToMany(models.Activity, {
          through: 'ActivityTag',
          onDelete: 'CASCADE'
        })
      }
    }
  })
  return Tag
}
