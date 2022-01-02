const Sequelize = require('sequelize')
const db = require('../database')

const Rsvp = db.define('rsvp', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
  },
  attending: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  entree: {
    type: Sequelize.STRING,
  },
  dairyFree: {
    type: Sequelize.BOOLEAN,
  },
  glutenFree: {
    type: Sequelize.BOOLEAN,
  },
  vegetarian: {
    type: Sequelize.BOOLEAN,
  },
  vegan: {
    type: Sequelize.BOOLEAN,
  },
})

db.sync()

module.exports = Rsvp
