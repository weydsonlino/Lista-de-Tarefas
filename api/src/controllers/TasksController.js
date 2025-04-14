const { Tasks, Categories } = require("../models");
class TasksController {
  async index(req, res) {
    const taks = await Tasks.findAll();

    return res.json(taks);
  }

  async store(req, res) {
    const { title, description, status, priority, categoryIds } = req.body;

    try {
      const task = await Tasks.create({ title, description, status, priority });

      if (categoryIds) {
        await task.setCategories(categoryIds);
      }

      return res.json(
        await Tasks.findByPk(task.id, {
          include: [
            {
              model: Categories,
              as: "categories",
            },
          ],
        })
      );
    } catch (error) {
      console.error("Erro:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { title, description, status, priority, categoryIds } = req.body;

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
    await task.save();
    if (categoryIds) {
      await task.setCategories(categoryIds);
    }
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
    const tasks = await Tasks.findByPk(id, {
      include: [
        {
          model: Categories,
          as: "categories",
        },
      ],
    });

    return res
      .status(200)
      .json({ message: "Tarefa buscada com sucesso", tasks });
  }
}

module.exports = new TasksController();
