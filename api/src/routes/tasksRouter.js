const express = require("express");
const TasksController = require("../controllers/TasksController");

const router = express.Router();

router.get("/", TasksController.index);
router.post("/", TasksController.store);
router.put("/:id", TasksController.update);
router.delete("/:id", TasksController.delete);
router.get("/:id", TasksController.show);
module.exports = router;
