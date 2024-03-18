import express from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Open University server is running");
});

app.use(notFound);

export default app;
