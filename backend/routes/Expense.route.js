const express = require("express");
const expenseController = require("../controllers/Expense.controller.js");

const expenseRouter = express.Router();

expenseRouter.post("/:userId", expenseController.post_expenseWithUser);
expenseRouter.get("/:userId", expenseController.get_allExpensesByUser);

module.exports = expenseRouter;
