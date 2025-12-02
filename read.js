import fs from "fs"

export default function readInput(filename,callable){
    const f =fs.readFile(`./data/${filename}`,"utf-8",(err, data)=>{
        callable(data)
    })
    
}