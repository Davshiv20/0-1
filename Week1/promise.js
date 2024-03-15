var d=new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    },3000)
});

function callBack(){
    console.log(d);
}
console.log(d);
d.then(callBack);