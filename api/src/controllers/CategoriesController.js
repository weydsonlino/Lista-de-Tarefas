const Categories = require("../models/Categories");

class CategoriesController {
  async index(req, res) {
    const categories = await Categories.findAll();

    return res.status(200).json(categories);
  }

  async store(req, res) {
    const { name } = req.body;

    const category = await Categories.create({
      name,
    });

    return res
      .status(201)
      .json({ message: "Categoria criada com sucesso!", category });
  }

  async show(req, res) {
    const { id } = req.params;

    const category = await Categories.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada!" });
    }

    return res.status(200).json(category);
  }
}

module.exports = new CategoriesController();
