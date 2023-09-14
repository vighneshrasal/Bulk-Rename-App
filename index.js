const fs = require('fs');
const replaceThis = "rasal";
const replaceWith = "vighnesh";
const preview = false;

try{
    fs.readdir("data/", (err, data)=>{
        for(let index = 0; index < data.length; index++){
            const item = data[index];
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
            if(!preview){
                fs.rename("data/" + item, newFile, ()=>{
                    console.log("Rename Success");
                });
            }else{
                if("data/" + item !== newFile){
                    console.log("data/" + item + " wil be renamed to " + newFile);
                } 
            }
        }
    });
}catch(err){
    console.error(err);
}
