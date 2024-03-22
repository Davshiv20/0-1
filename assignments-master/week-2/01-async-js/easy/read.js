const fs=require('fs').promises;
async function reading(){
    const data=await fs.readFile("a.txt",'utf-8')
    console.log(data);
}
reading()
