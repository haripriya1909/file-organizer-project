let fs=require("fs");
let path = require("path");


// const { dir } = require("console v");

// const { dir } = require("console v");
function helpFn(dirPath)
{
   console.log(`
   List of All the commands:
                   node main.js tree "directoryPath"
                   node main.js organize "directoryPath" 
                   node main.js help
                   `);

}
module.exports={
    helpKey:helpFn
}