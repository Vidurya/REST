const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'schools',
        key: 'id'
      }
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'classes',
        key: 'id'
      }
    },
    admission_no: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    roll_no: DataTypes.STRING(50),
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_of_birth: DataTypes.DATEONLY,
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other')
    },
    blood_group: DataTypes.STRING(5),
    address: DataTypes.TEXT,
    admission_date: DataTypes.DATEONLY,
    previous_school: DataTypes.STRING(255),
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  }, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        name: 'idx_school_students',
        fields: ['school_id']
      },
      {
        name: 'idx_class_students',
        fields: ['class_id']
      }
    ]
});

module.exports = Student;