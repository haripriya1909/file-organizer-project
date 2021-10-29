#!/usr/bin/env node

var helpOB=require('./organized_files/commands/help.js');
var treeOB=require('./organized_files/commands/tree.js');
// console.log(treeOB);
var orgOB=require('./organized_files/commands/oraganise.js');
// const { dir } = require("console v");
let fs=require("fs");
// let path = require("path/posix");
let path = require("path");

let inputArr =process.argv.slice(2);
// console.log(inputArr);

let command = inputArr[0];
switch(command)
{
    case "tree":
        treeOB.treeKey(inputArr[1]);
        break;
    case "organize":
        orgOB.organiseKey(inputArr[1]);
        break;
    case "help" :
        helpOB.helpKey(inputArr[1]);
        break;  
    default:
        console.log("Please 😁 Input Right command");
        break;
}




