const router = require("express").Router();
const expensesController = require ("../../controllers/expensesControllers");


// Matches with "/api/expenses"

router
.route("/")
.get(expensesController.findAll)
.post(expensesController.create);


// Matches with "/api/expenses/:id"
router
.route("/:id")
.get(expensesController.findById)
.put(expensesController.update)
.delete(expensesController.remove);

module.exports = router