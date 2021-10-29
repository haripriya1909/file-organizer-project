let fs = require("fs");
// let path = require("path/posix");
let path = require("path");
// const { dir } = require("console v");

function treeFn(dirPath) {
    let destPath;
    if (dirPath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        }
        else {
            console.log("Kindly enter the path");
            return;
        }
    }
}



function treeHelper(dirPath, indent) {
    //isfile or is folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        let FileName = path.basename(dirPath);
        console.log(indent + "├───" + FileName)
    }
    else {
        let dirName = path.basename(dirPath);
        console.log(indent + "└───" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childpath = path.join(dirPath, childrens[i]);
            treeHelper(childpath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treeFn
}