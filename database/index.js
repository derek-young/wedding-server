const { Sequelize, Model, DataTypes } = require('sequelize')
const DB_CONFIG = require('./dbConfig')

const sequelize = new Sequelize(
  DB_CONFIG.DB_NAME,
  DB_CONFIG.USER,
  DB_CONFIG.PW,
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
)

async function init() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

init()

module.exports = sequelize
