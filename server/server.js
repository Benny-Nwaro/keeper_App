import express from "express";
import { fashCraftRoutes } from "./src/index.js";
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express();
// const port = 3000;
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 9000;
const corsOptions = {
  origin: "http://127.0.0.1:8000", // Remove the trailing slash
};
app.use(cors());
// app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/", fashCraftRoutes);
const appStart = () => {
  try {
    app.listen(port, () => console.log(`app listening on ${port}`));
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};

appStart();
