import * as path from "path";
import * as fs from "fs";
import * as TJS from "typescript-json-schema";
import { pipe } from "ramda";
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

const getInterfaceFiles = (): string[] => {
  // Search interface files
  const files = (() => {
    const files = fs.readdirSync(resolve("interface"));
    console.log("這是files", { files });
    return files.map((file) => resolve("interface", file));
  })();
  console.log("呼叫files", { files });
  return files;
};

// getInterfaceFiles();

//get all interfaces,then generate schema
const schemaGenerator = (files: string[]): TJS.JsonSchemaGenerator => {
  //make schema files
  console.log("收到的files", { files });
  const program = TJS.getProgramFromFiles(files, compilerOptions, basePath);
  // console.log({ program });
  const generator = TJS.buildGenerator(
    program,
    settings
  ) as TJS.JsonSchemaGenerator;
  console.log(generator.getUserSymbols());

  return generator;
};

const generateSchemas = (generator: TJS.JsonSchemaGenerator): void => {
  //get all files while match regex
  const interfaces = generator
    .getUserSymbols()
    .filter((item) => item.match(/(.*)Interface/gi));
  console.log(interfaces);

  //create all schema files
  interfaces.forEach((item) => {
    const schema = generator.getSchemaForSymbol(item);
    console.log({ schema });
    const prefix = `export default`;
    const filePath = `${resolve("schema", "@Request", `${item}.ts`)}`;
    const fileContents = `${prefix}${JSON.stringify(schema, null, 2)}`;
    //data,replacer(op),space(op)
    fs.writeFileSync(filePath, fileContents);
  });
};
pipe(getInterfaceFiles, schemaGenerator, generateSchemas)();
