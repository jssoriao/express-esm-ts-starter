/**
 * Remove old files, copy front-end ones.
 */

import fs from "fs-extra";
import childProcess from "child_process";

(async () => {
  try {
    // Remove current build
    await remove("./dist/");
    // Copy front-end files
    await copy("./src/public", "./dist/public");
    await copy("./src/views", "./dist/views");
    // Copy back-end files
    await exec("tsc --build tsconfig.prod.json", "./");
  } catch (err) {
    console.error(err);
  }
})();

/**
 *
 * @param {string} loc
 * @returns {Promise<void>}
 */
function remove(loc) {
  return new Promise((res, rej) => {
    return fs.remove(loc, (err) => {
      return !!err ? rej(err) : res();
    });
  });
}

/**
 *
 * @param {string} src
 * @param {string} dest
 * @returns {Promise<void>}
 */
function copy(src, dest) {
  return new Promise((res, rej) => {
    return fs.copy(src, dest, (err) => {
      return !!err ? rej(err) : res();
    });
  });
}

/**
 *
 * @param {string} cmd
 * @param {string} loc
 * @returns {Promise<void>}
 */
function exec(cmd, loc) {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
      if (!!stdout) {
        console.info(stdout);
      }
      if (!!stderr) {
        console.warn(stderr);
      }
      return !!err ? rej(err) : res();
    });
  });
}
