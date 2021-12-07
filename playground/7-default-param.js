    const greeter=(name='anonymous')=>{
        console.log("hello "+name)
    }

    greeter("aayush")

    // for object destructuring
    product={
        order:"burger",
        stock:19
    }

    const transac=(type,{order,stock=0}={})=>{
        console.log(type,order,stock)
    }

    transac('order')