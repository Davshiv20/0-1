const fs=require('fs').promises;
async function reading(){

    const data2=" hi shivam hi hi hih ih  shd";
    
    fs.appendFile("a.txt",data2);
    const data=await fs.readFile("a.txt",'utf-8')
    console.log(data);
}
reading()
