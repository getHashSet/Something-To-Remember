const router = require ("express").Router();
const dolistRoutes = require ("./dolist-api");
const expensesRoutes = require ("./expenses-api");

var passport = require("passport");
// Dolist routes

router.use("/dolist", dolistRoutes);
router.use("/expenses", expensesRoutes);

module.exports = router