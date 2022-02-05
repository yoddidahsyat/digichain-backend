'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      symbol: {
        type: Sequelize.STRING
      },
      decimal: {
        type: Sequelize.INTEGER
      },
      total_supply: {
        type: Sequelize.INTEGER
      },
      yield_fee: {
        type: Sequelize.INTEGER
      },
      liquidity_fee: {
        type: Sequelize.INTEGER
      },
      charity_address: {
        type: Sequelize.STRING
      },
      charity_percent: {
        type: Sequelize.INTEGER
      },
      reward_fee: {
        type: Sequelize.INTEGER
      },
      auto_add_liquidity: {
        type: Sequelize.INTEGER
      },
      marketing_fee: {
        type: Sequelize.INTEGER
      },
      marketing_wallet: {
        type: Sequelize.INTEGER
      },
      reward_token: {
        type: Sequelize.STRING
      },
      buyback_fee: {
        type: Sequelize.INTEGER
      },
      reflection_fee: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tokens');
  }
};