const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const School = sequelize.define('School', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  code: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  established_year: DataTypes.INTEGER,
  board: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  website: DataTypes.STRING(255),
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  address: DataTypes.TEXT,
  city: DataTypes.STRING(100),
  state: DataTypes.STRING(100),
  pincode: DataTypes.STRING(20),
  principal_name: DataTypes.STRING(255),
  principal_email: DataTypes.STRING(255),
  subdomain: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active'
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = School;