let fs=require("fs");
// let path = require("path/posix");
let path = require("path");
// const { dir } = require("console v");
let types={
    media: ["mp4" , "mkv"],
    archives: ['zip' , '7z' , 'rar'],
    documents: ['docx' , 'doc' , 'txt' , 'jpg']
    }
function organizeFn(dirPath)
{
   //console.log("organize command implemented for ", dirPath);
   //1. input -> directory path given
   let destPath;
   if(dirPath==undefined)
   {
       destPath = process.cwd();
       return;
   }
   else{
       let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            //2. create -> organised_files -> directory 
             destPath=path.join(dirPath, "organized_files");
            if(fs.existsSync(destPath)==false)
            {
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log("Kindly enter the path");
        }
       }

organizeHelper(dirPath, destPath);

}

function organizeHelper(src, dest)
{
    //3. identify categories of all the files present in that input directory ->
    let childNames=fs.readdirSync(src);
    for(let i=0; i<childNames.length;i++)
    {
        let childAddress=path.join(src,childNames[i]);
        let isFile=fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
            // console.log(childNames[i]);
            let category= getcategory(childNames[i]);
            // console.log(childNames[i],"belongs to ---> ",category);
            //4.copy / cut files to that organized directory inside of any of category folder
            sendFiles(childAddress, dest, category);
        }
    }
} 




function sendFiles(srcFilePath, dest,category)
{
    let categorypath= path.join(dest,category);
    if(fs.existsSync(categorypath)==false)
    {
        fs.mkdirSync(categorypath);
    }
let filename=path.basename(srcFilePath);
let destFilePath= path.join(categorypath,filename);
fs.copyFileSync(srcFilePath,destFilePath);
fs.unlinkSync(srcFilePath);
console.log(filename,"copied to", category);

}
function getcategory(name)
{
    let ext=path.extname(name);
    ext = ext.slice(1);
    console.log(ext);
    for(let key in types)
    {
       let ctypearr=types[key];
       for(let i=0;i<ctypearr.length;i++)
       {
           if(ext==ctypearr[i])
           {
               return key;
           }
       }
    }

    return "others";
}


module.exports={
    organiseKey:organizeFn
}