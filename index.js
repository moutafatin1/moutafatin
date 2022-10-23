#!/usr/bin/env node
import chalk from "chalk";
import welcome from "cli-welcome";
import { readFile } from "fs/promises";

const githubClr = chalk.white.bgHex("6cc644").bold;

const pkgJson = JSON.parse(
  await readFile(new URL("./package.json", import.meta.url))
);

welcome({
  title: "Oussama Moutafatin",
  tagLine: "Get to know Moutafatin",
  description: pkgJson.description,
  version: pkgJson.version,
  clear: true,
  bgColor: "#A020F0",
  color: "#fff",
  bold: true,
});

console.log(`

${chalk.dim("bio....")}

📖 ${githubClr(" GitHub ")}: ${chalk.dim.underline(
  "https://github.com/moutafatin1/moutafatin"
)}
`);
