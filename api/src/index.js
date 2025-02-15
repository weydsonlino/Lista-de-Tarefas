const express = require("express");
const sequelize = require("./config/database");
const tasksRouter = require("./routes/tasksRouter");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/tasks", tasksRouter);

sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
  app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});
