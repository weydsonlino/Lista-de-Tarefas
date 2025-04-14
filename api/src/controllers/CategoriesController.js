const {Categories} = require("../models");

class CategoriesController {
  async index(req, res) {
    const categories = await Categories.findAll();

    return res.status(200).json(categories);
  }

  async store(req, res) {
    const { name } = req.body;

    if(!name){
        return res.status(400).json({ message: "Nome da categoria é obrigatório!" });
    }
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
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if(!name || !id){
        return res.status(400).json({ message: "Nome da categoria e ID são obrigatórios!" });
    }
    const category = await Categories.findByPk(id)
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada!" });
    }
    if (name){
        category.name = name;
    }
    await category.save();
    return res.status(200).json({ message: "Categoria atualizada com sucesso!" });
  }
  async delete(req, res) {
    const {id} = req.params;
    if(!id){
        return res.status(400).json({ message: "ID da categoria é obrigatório!" });
    }
    const category = await Categories.findByPk(id);

    if(!category){
        return res.status(404).json({ message: "Categoria não encontrada!" });
    }
    await category.destroy();
    return res.status(200).json({ message: "Categoria deletada com sucesso!" });
  }
}

module.exports = new CategoriesController();
