export default{
  "description": "Instances of the `readline.Interface` class are constructed using the`readline.createInterface()` method. Every instance is associated with a\nsingle `input` `Readable` stream and a single `output` `Writable` stream.\nThe `output` stream is used to print prompts for user input that arrives on,\nand is read from, the `input` stream.",
  "type": "object",
  "properties": {
    "terminal": {
      "type": "boolean"
    },
    "line": {
      "description": "The current input data being processed by node.\n\nThis can be used when collecting input from a TTY stream to retrieve the\ncurrent value that has been processed thus far, prior to the `line` event\nbeing emitted. Once the `line` event has been emitted, this property will\nbe an empty string.\n\nBe aware that modifying the value during the instance runtime may have\nunintended consequences if `rl.cursor` is not also controlled.\n\n**If not using a TTY stream for input, use the `'line'` event.**\n\nOne possible use case would be as follows:\n\n```js\nconst values = ['lorem ipsum', 'dolor sit amet'];\nconst rl = readline.createInterface(process.stdin);\nconst showResults = debounce(() => {\n  console.log(\n    '\\n',\n    values.filter((val) => val.startsWith(rl.line)).join(' ')\n  );\n}, 300);\nprocess.stdin.on('keypress', (c, k) => {\n  showResults();\n});\n```",
      "type": "string"
    },
    "cursor": {
      "description": "The cursor position relative to `rl.line`.\n\nThis will track where the current cursor lands in the input string, when\nreading input from a TTY stream. The position of cursor determines the\nportion of the input string that will be modified as input is processed,\nas well as the column where the terminal caret will be rendered.",
      "type": "number"
    }
  },
  "required": [
    "cursor",
    "line",
    "terminal"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}