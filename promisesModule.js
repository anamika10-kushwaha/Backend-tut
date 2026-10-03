import fs from "fs/promises";
let a=await fs.writeFile("second.txt","anamika is a good girl")
let b= await fs.readFile("second.txt");
console.log(b.toString());
await fs.appendFile("second.txt","\n\n\n\n very intelligent")
let c=await fs.readFile("second.txt");
console.log(c.toString());