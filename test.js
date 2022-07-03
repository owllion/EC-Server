// Import the filesystem module
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log(45454, __dirname, 65656);

// Function to get current filenames
// in directory
// filenames = fs.readdirSync(__dirname);

// console.log("\nCurrent directory filenames:");
// filenames.forEach((file) => {
//   console.log(file);
// });

// Function to get current filenames
// in directory with "withFileTypes"
// set to "true"

// fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });

// console.log("\nCurrent directory files:");
// fileObjs.forEach((file) => {
//   console.log(file);
// });
