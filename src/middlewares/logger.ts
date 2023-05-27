import type { Express } from "express";
import { pinoHttp } from "pino-http";
import { nanoid } from "nanoid";

import logger from "@/services/logger";

export function withLogger(app: Express) {
  app.use(
    pinoHttp({
      logger,
      genReqId: (req, res) => {
        const existingID = req.id ?? req.headers["x-request-id"];
        if (existingID) return existingID;
        const id = nanoid();
        res.setHeader("X-Request-Id", id);
        return id;
      },
      autoLogging: true,
      quietReqLogger: true,
    })
  );
}
