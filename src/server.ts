import cookieParser from "cookie-parser";
import express from "express";

import { withLogger } from "@/middlewares/logger";

const app = express();

// attaches an http logger to the request context
// this exposes `req.log` pino `Logger` (e.g. `req.log.debug("message"))
withLogger(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.all("*", (req, res) => {
  const msg = "ExpressJS Typescript ESM";
  req.log.info(msg);
  res.send(msg);
});

export default app;
