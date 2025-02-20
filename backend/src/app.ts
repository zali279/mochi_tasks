import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import { config } from "./config/env";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: config.frontEndUrl,
}));

app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
  });

  next();
});

app.use("/", routes);
app.use(errorHandler);
export default app;
