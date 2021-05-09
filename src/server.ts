import dotenv from "dotenv";
import http from "http";
import app from "./app";


// initialize configuration
dotenv.config();

const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
