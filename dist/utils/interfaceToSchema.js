import * as path from "path";
import * as fs from "fs";
import * as TJS from "typescript-json-schema";
import { pipe } from "ramda";
const settings = {
    required: true,
};
const compilerOptions = { strictNullChecks: true };
const basePath = path.resolve(__dirname, "../../src");
console.log(basePath, __dirname);
const resolve = (...route) => {
    return path.join(basePath, ...route);
};
const getInterfaceFiles = () => {
    const files = (() => {
        const files = fs.readdirSync(resolve("interface"));
        return files.map((file) => resolve("interface", file));
    })();
    return files;
};
const schemaGenerator = (files) => {
    console.log("收到的files", { files });
    const program = TJS.getProgramFromFiles(files, compilerOptions, basePath);
    const generator = TJS.buildGenerator(program, settings);
    console.log(generator.getUserSymbols());
    return generator;
};
const generateSchemas = (generator) => {
    const interfaces = generator
        .getUserSymbols()
        .filter((item) => item.match(/(.*)Interface/gi));
    console.log(interfaces);
    interfaces.forEach((item) => {
        const schema = generator.getSchemaForSymbol(item);
        console.log({ schema });
        const prefix = `export default`;
        const filePath = `${resolve("schema", "@Request", `${item}.ts`)}`;
        const fileContents = `${prefix}${JSON.stringify(schema, null, 2)}`;
        fs.writeFileSync(filePath, fileContents);
    });
};
pipe(getInterfaceFiles, schemaGenerator, generateSchemas)();
//# sourceMappingURL=interfaceToSchema.js.map