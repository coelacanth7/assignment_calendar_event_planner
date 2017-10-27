"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Invitations", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			event_id: {
				type: Sequelize.INTEGER
			},
			user_id: {
				type: Sequelize.INTEGER
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("NOW")
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("NOW")
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Invitations");
	}
};