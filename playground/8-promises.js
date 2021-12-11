// callback

const doWorkCallback=(callback)=>{
    setTimeout(()=>{
        // callback('something went wrong',undefined)
        callback(undefined,[1,4,7])

    },2000)
}

doWorkCallback((error,result)=>{
    if(error)
        return console.log(error)
    console.log(result)
})

// promise (for mongodb)

const doWorkPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('somehting went wrong')
    },2000)
})

doWorkPromise.then((result)=>{
    console.log('success',result)
}).catch((error)=>{
    console.log(error)
})