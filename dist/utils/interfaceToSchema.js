"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const TJS = __importStar(require("typescript-json-schema"));
const ramda_1 = require("ramda");
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
(0, ramda_1.pipe)(getInterfaceFiles, schemaGenerator, generateSchemas)();
//# sourceMappingURL=interfaceToSchema.js.map