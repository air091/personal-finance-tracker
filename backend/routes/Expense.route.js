const express = require("express");
const expenseController = require("../controllers/Expense.controller.js");

const expenseRouter = express.Router();

expenseRouter.post("/:userId", expenseController.post_expenseWithUser);
expenseRouter.get("/:userId", expenseController.get_allExpensesByUser);
expenseRouter.put("/:userId", expenseController.update_expenseByUser);

module.exports = expenseRouter;
