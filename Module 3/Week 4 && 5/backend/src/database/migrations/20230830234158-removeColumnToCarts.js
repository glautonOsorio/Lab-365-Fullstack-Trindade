'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.removeColumn('carts', 'novaColuna')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.addColumn('carts', 'novaColuna', {
      type: Sequelize.STRING,
    })
  }
};
