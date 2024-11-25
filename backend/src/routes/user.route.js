import express from "express";
import { registerUser, loginUser, usersList } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", usersList);

export default router;