#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: --move=<move>")
 .option("move", { alias: "move", describe: "Rock, Paper, or Scissors", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.move}!`;

console.log(greeting);