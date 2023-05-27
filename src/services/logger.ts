import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import pino from "pino";

export const __dirname = dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === "production";
const logLevel = process.env.LOG_LEVEL || "info";

const streams = isProd
  ? [{ stream: process.stdout, level: "trace" }]
  : [
      {
        stream: pino.transport({
          target: "pino-pretty",
          options: {},
        }),
        level: "trace",
      },
    ];

const logger = pino(
  {
    level: logLevel,
    base: undefined,
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
  pino.multistream(streams as any)
);

export type { Logger } from "pino";
export default logger;
