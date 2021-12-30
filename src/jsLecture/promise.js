let p=new Promise((resolve,reject)=>{
    let a=1+2
    if(a==2){
        resolve("Success")
    }else{
        reject("Faild")
    }
})

console.log(p)
p.then((message)=>{console.log("In Then block "+message)}).catch((message)=>{
    console.log("This is in catch block "+message)
})