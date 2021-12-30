const recordVideOne=new Promise((resolve,reject)=>{
    resolve("Video 1 recoded");
})
const recordVideTwo=new Promise((resolve,reject)=>{
    resolve("Video 2 recoded");
})
const recordVideThree=new Promise((resolve,reject)=>{
    resolve("Video 3 recoded");
})

// when all the promise done it show result
Promise,all([recordVideOne,recordVideTwo,recordVideThree]).then((messages)=>console.log("messages",messages))

// .race is same likse all but race return the promise when any of promise complete without waiting for every thing complete
//bz of this it will return single message in then 
Promise.race([recordVideOne,recordVideTwo,recordVideThree]).then((messages)=>console.log("messages",messages))
