const userController = require("../controllers/User.controller.js");
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", userController.get_allUsers);
userRouter.get("/:id", userController.get_userById);
userRouter.post("/", userController.post_addUser);
userRouter.put("/:id", userController.put_userById);
userRouter.delete("/:id", userController.delete_userById);

// AUTH
userRouter.post("/login", userController.logIn_user);

module.exports = userRouter;
