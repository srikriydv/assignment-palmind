import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const startServer = async () => {
  await connectDB();

  app.use("/api/users", userRoutes);

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
};

startServer();