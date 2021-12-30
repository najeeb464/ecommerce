
const userLeft=false
const userWatchingCatMeme=false
function watchTutorialCallback(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:"User Left",
            message:":("
        })
    }
    else if(userWatchingCatMeme){
        errorCallback({
            name:"User Watching Cat Meme",
            message:"Watching"
        })
    
    }
    else{
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((msg)=>{
    console.log("Success: in call back "+msg)
},(error)=>{
    console.log("error in call back",error.name+" "+error.message)
})

// covert callbackt o promices


function watchTutorialPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name:"User Left",
                message:":("
            })
        }
        else if(userWatchingCatMeme){
            reject({
                name:"User Watching Cat Meme",
                message:"Watching"
            })
        
        }
        else{
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((msg)=>console.log("This is in Promise then"+msg)).catch((error)=>console.log(error.name+" "+error.message))