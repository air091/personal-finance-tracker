const {
  addExpenseWithUser,
  getAllExpensesByUser,
} = require("../databases/expenseDatabase.js");

module.exports.post_expenseWithUser = async (request, response) => {
  try {
    const { userId } = request.params;
    const { amount, category, description } = request.body;
    await addExpenseWithUser(userId, amount, category, description);
    response
      .status(200)
      .json({ status: true, message: "Expense successfully added." });
  } catch (error) {
    response.status(500).json({ status: false, errorMessage: error });
  }
};

module.exports.get_allExpensesByUser = async (request, response) => {
  try {
    const { userId } = request.params;
    const expenses = await getAllExpensesByUser(userId);
    if (expenses.length === 0)
      return response
        .status(404)
        .json({ status: false, message: "No expenses yet." });

    response.status(200).json({ status: true, data: expenses });
  } catch (error) {
    console.log("Error message:", error);
    response.status(500).json({ status: false, errorMessage: error });
  }
};
