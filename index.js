#!/usr/bin/env node
import welcome from "cli-welcome";
import pkgJson from "./package.json" assert { type: "json" };

welcome({
  title: pkgJson.name,
  tagLine: "Get to know Moutafatin",
  description: pkgJson.description,
  version: pkgJson.version,
  clear: true,
  bgColor: "#A020F0",
  color: "#fff",
  bold: true,
});

console.log(`
Oussama Moutafatin

bio....
`);
