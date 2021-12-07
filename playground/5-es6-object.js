const name='aayush'
const age=21

const detail={
    name,
    age,
    location:"unknown"
}

// object destructing
const product={
    book:"mybook",
    price:100,
    rating:2
}

const {book,price}=product

//using function
const transaction=({book,price})=>{
    console.log(price)
}

transaction(product)