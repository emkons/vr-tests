import nodeResolve from "@rollup/plugin-node-resolve";
import fs from "fs";

export default {
  input: "src/index.js",
  output: {
    dir: "build",
    format: "umd",
  },
  plugins: [
    nodeResolve(),
    {
      async writeBundle() {
        await fs.promises.copyFile("index.html", "./build/index.html");
      },
    },
  ],
};
