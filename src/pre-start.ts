/**
 * Pre-start is where we want to place things that must run BEFORE the express
 * server is started. This is useful for environment variables, command-line
 * arguments, and cron-jobs.
 */

// NOTE: DO NOT IMPORT ANY SOURCE CODE HERE
import { parse } from "ts-command-line-args";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));

// **** Types **** //

interface IArgs {
  env: string;
}

// **** Setup **** //

// Command line arguments
const args = parse<IArgs>({
  env: {
    type: String,
    defaultValue: "development",
    alias: "e",
    optional: true,
  },
});

// Set the env file
const res = dotenv.config({
  path: join(__dirname, `../env/${args.env}.env`),
});
if (res.error) {
  throw res.error;
}
