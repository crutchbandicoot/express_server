import dotenv from "dotenv";
import express from "express";
import routes from "./routes/routes";

// initialize configuration
dotenv.config();

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
