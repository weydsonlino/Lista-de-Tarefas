const Tasks = require("../models/Tasks");

class TasksController {
  async index(req, res) {
    const taks = await Tasks.findAll();

    return res.json(taks);
  }

  async store(req, res) {
    const { title, description, status, priority } = req.body;

    const tasks = await Tasks.create({
      title,
      description,
      status,
      priority,
    });

    return res
      .status(201)
      .json({ message: "Tarefa criada com sucesso!", tasks });
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;

    const task = await Tasks.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada!" });
    }

    if ((title, description, status, priority)) {
      task.title = title;
      task.description = description;
      task.status = status;
      task.priority = priority;
    }
    task.save();
    return res.status(200).json({ message: "Task atualizada com sucesso" });
  }
  async delete(req, res) {
    const { id } = req.params;

    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada!" });
    }
    task.destroy();

    return res.status(200).json({ message: "Tarefa deletada com sucesso!" });
  }
  async show(req, res) {
    const { id } = req.params;
    const tasks = await Tasks.findOne({ where: { id } });

    return res
      .status(200)
      .json({ message: "Tarefa buscada com sucesso", tasks });
  }
}

module.exports = new TasksController();
