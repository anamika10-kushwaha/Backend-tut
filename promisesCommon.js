const fs=require("fs");
function writepromise(filename,content){
    return new Promise(
        (resolve,reject)=>{
            fs.writeFile(filename,content,(err)=>{
                if(err)reject (err);
                else resolve("write successfully");
            })
        })
}
function readfilepromise(filename,content){
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(filename,(err,dat)=>{
                if(err) reject(err);
                else resolve(dat.toString());
            })
        }
    )
}
module.exports={ writepromise , readfilepromise
}