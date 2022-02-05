'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Token.init({
    type: DataTypes.STRING,
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    decimal: DataTypes.INTEGER,
    total_supply: DataTypes.INTEGER,
    yield_fee: DataTypes.INTEGER,
    liquidity_fee: DataTypes.INTEGER,
    charity_address: DataTypes.STRING,
    charity_percent: DataTypes.INTEGER,
    reward_fee: DataTypes.INTEGER,
    auto_add_liquidity: DataTypes.INTEGER,
    marketing_fee: DataTypes.INTEGER,
    marketing_wallet: DataTypes.INTEGER,
    reward_token: DataTypes.STRING,
    buyback_fee: DataTypes.INTEGER,
    reflection_fee: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};