'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skills.init({
    preferred_programming_language: DataTypes.STRING,
    experience: DataTypes.STRING,
    disability: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Skills',
  });
  return Skills;
};