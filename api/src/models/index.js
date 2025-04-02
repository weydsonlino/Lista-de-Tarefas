const sequelize = require("../config/database");
const Tasks = require("./Tasks");
const Categories = require("./Categories");

// Define associações
Tasks.belongsToMany(Categories, {
  through: "CategoriesTasks",
  as: "categories",
});
Categories.belongsToMany(Tasks, {
  through: "CategoriesTasks",
  as: "tasks",
});

module.exports = { sequelize, Tasks, Categories };
