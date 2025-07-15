require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/User.route.js");
const expenseRouter = require("./routes/Expense.route.js");

const app = express();
const port = process.env.MAIN_PORT || 8001;
app.use(cors());
app.use(express.json());

// USER ROUTES
app.use("/api/user", userRouter);
app.use("/api/expense", expenseRouter);

async function main() {
  app.listen(port, (err) => {
    if (err) {
      console.log("Starting server error:", err);
      process.exit(1);
    }
    console.log("Server running, port", port);
  });
}

main();
