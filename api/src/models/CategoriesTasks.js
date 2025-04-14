import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Adjust the path to your sequelize instance

const CategoriesTasks = sequelize.define(
  "CategoriesTasks",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "CategoryTasks",
    timestamps: false,
  }
);

module.exports = CategoriesTasks;
