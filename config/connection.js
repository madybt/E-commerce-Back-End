require('dotenv').config();
const { Sequelize } = require ('../config/connection');

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const sequelize= new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres', 
    logging: false,      
});

  sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;
