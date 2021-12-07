const fs = require('fs')

//creating javascript object
const book = {
    title: 'yo',
    author: 'me'
}

  // write json to file

//javascript object to JSON conversion
const bookJSON = JSON.stringify(book)

//javascript JSON back to object conversion
// const parsedData=JSON.parse(bookJSON)
// console.log(parsed.title)

fs.writeFileSync('note.json', bookJSON)

//   // read from json file 

// const dataBuffer=fs.readFileSync('note.json')
// console.log(dataBuffer)

// const data=dataBuffer.toString()       //convert byte data to string json
// console.log(data)

// //javascript JSON back to object conversion
// const parsedData=JSON.parse(data)
// console.log(parsedData.author)

