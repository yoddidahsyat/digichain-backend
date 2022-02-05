'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Launchpads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      telegram: {
        type: Sequelize.STRING
      },
      presale_address: {
        type: Sequelize.STRING
      },
      token_address: {
        type: Sequelize.STRING
      },
      token_presale: {
        type: Sequelize.INTEGER
      },
      token_liquidity: {
        type: Sequelize.INTEGER
      },
      presale_rate: {
        type: Sequelize.INTEGER
      },
      listing_rate: {
        type: Sequelize.INTEGER
      },
      initial_market_cap: {
        type: Sequelize.INTEGER
      },
      soft_cap: {
        type: Sequelize.INTEGER
      },
      hard_cap: {
        type: Sequelize.INTEGER
      },
      unsold_token: {
        type: Sequelize.STRING
      },
      presale_start: {
        type: Sequelize.DATE
      },
      presale_end: {
        type: Sequelize.DATE
      },
      listing_on: {
        type: Sequelize.STRING
      },
      liquidity_percent: {
        type: Sequelize.INTEGER
      },
      liquidity_lockup_time: {
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
    await queryInterface.dropTable('Launchpads');
  }
};