import express from "express";
import { fashCraftRoutes } from "./src/index.js";

const app = express();
const port = 3000;

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
