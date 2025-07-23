import express from "express";
import cors from "cors";
import router from "./routes/routes";

const createHTTPServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: true }));

  app.use("/api", router);

  return app;
};

export const app = createHTTPServer();
