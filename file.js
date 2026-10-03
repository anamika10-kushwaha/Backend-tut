const fs=require("fs");
// console.log(fs);
console.log('starting a file');
fs.writeFile("first.txt","hey you are the topmost coder here.",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("writing data successfully");
    }
    fs.readFile("first.txt",(error,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("reading successfully");
            console.log(data.toString());
        }
        fs.appendFile("first.txt","\n and also one of the best developer here",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("appending done");
            }
            fs.readFile("first.txt",(error,data)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(data.toString());
                }
            })
        });
    });
});
console.log('ending');