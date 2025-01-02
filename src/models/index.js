const sequelize = require('../config/database');

const School = require('./School');
const Student = require('./Student');

const syncDatabase = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connection established');
      
      await sequelize.sync({ alter: true });
      console.log('Database synchronized');
    } catch (error) {
      console.error('Database synchronization failed:', error);
      process.exit(1);
    }
};

module.exports = {
    sequelize,
    syncDatabase,
    School,
    Student
}