#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Some words you want to write to file.";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
