const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Categories = sequelize.define("Categories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Categories;
