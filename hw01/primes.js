#!/usr/bin/env node

var fs = require('fs');
var outfile = "primes.txt";
var primes = [];
var numberOfPrimes = 100;
var num = 2;

function isPrime(n) {
    for (var i=2; i<=Math.floor(n/2); i++) {
        if (n%i === 0 && n !== i) {
            return false;
        }
    }
    return true;
}

do {
    if (isPrime(num)) primes.push(num);
    num++;
} while(primes.length < numberOfPrimes);

var out = primes.join(',');
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
