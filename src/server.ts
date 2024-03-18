import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { config } from "./app/configs/configs";

let server: Server;
const port = config.port;
const main = () => {
  mongoose.connect(config.db_link as string);

  server = app.listen(config.port, () => {
    console.log(`app listening on port ${port}`);
  });
};

main();

process.on("unhandledRejection", () => {
  console.log("Unhandled Rejection is detected. shuting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log("Uncaught Exception is detected. shutting down ...");
  process.exit(1);
});
