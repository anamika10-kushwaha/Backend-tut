const {writepromise,readfilepromise}=require("./promisesCommon.js");
async function run(){
    let result=await writepromise("third.txt","placement preparation start");
    console.log(result);
    let content=await readfilepromise("third.txt");
    console.log(content);
}
run();