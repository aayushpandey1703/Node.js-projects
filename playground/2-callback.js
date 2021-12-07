const add=(a,b,callback)=>{
    setTimeout(()=>{
        const c=a+b
        callback(c)  //(not return c)                //callback function is used when asynchronous (setTimeout) is used as return will have always have undefined 

    },2000)

}

add(1,2,(sum)=>{
    console.log(sum)
})