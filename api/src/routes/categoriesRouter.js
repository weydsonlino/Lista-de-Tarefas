const express = require("express");
const CategoriesController = require("../controllers/CategoriesController");

const router = express.Router();

router.get("/", CategoriesController.index);
router.post("/", CategoriesController.store);
//router.put("/:id", CategoriesController.update);
//router.delete("/:id", CategoriesController.delete);
router.get("/:id", CategoriesController.show);
module.exports = router;
