import * as path from "path";
import * as fs from "fs";
import * as TJS from "typescript-json-schema";
import { models } from "mongoose";

const settings: TJS.PartialArgs = {
  required: true,
};

// TJS.CompilerOptions is basically same with "compilerOptions" in tsconfig.json
// in other words, you can import tsconfig.json and use its compilerOptions
const compilerOptions: TJS.CompilerOptions = { strictNullChecks: true };

// this is the path where TJS starts from to explore the directories
// usually, I recommend it to be src folder, which is the root folder of all your codes
const basePath: string = path.resolve(__dirname, "../../src");
console.log(basePath, __dirname);

const resolve = (...route: string[]) => {
  return path.join(basePath, ...route);
};

// you should pass files list to the function which generates the program
// normally, grab every interface files that you want to convert to JSON schema
const files = (() => {
  const files = fs.readdirSync(resolve("interface"));
  return files.map((file) => resolve("interface", file));
})();
