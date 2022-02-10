'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Launchpad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Launchpad.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    website: DataTypes.STRING,
    twitter: DataTypes.STRING,
    telegram: DataTypes.STRING,
    presale_address: DataTypes.STRING,
    token_address: DataTypes.STRING,
    token_presale: DataTypes.INTEGER,
    token_liquidity: DataTypes.INTEGER,
    presale_rate: DataTypes.INTEGER,
    listing_rate: DataTypes.INTEGER,
    initial_market_cap: DataTypes.INTEGER,
    soft_cap: DataTypes.INTEGER,
    hard_cap: DataTypes.INTEGER,
    unsold_token: DataTypes.STRING,
    presale_start: DataTypes.DATE,
    presale_end: DataTypes.DATE,
    listing_on: DataTypes.STRING,
    liquidity_percent: DataTypes.INTEGER,
    liquidity_lockup_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Launchpad',
    tableName: 'launchpads'
  });
  return Launchpad;
};