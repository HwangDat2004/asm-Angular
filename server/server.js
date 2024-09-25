import express from "express";
import connectMongoDB from "./config/dbconfig.js";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
connectMongoDB("mongodb://127.0.0.1:27017/tutor_nodejs");
app.listen(3000);
export const viteNodeApp = app;
