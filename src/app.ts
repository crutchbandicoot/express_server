import express from "express";
import "reflect-metadata";
import cors from "cors";


const app = express();

app.use(express.urlencoded());
app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Express server is running like a well oiled machine",
  });
});

export default app;
