const fs=require('fs')

const dataBuffer=fs.readFileSync('note.json')
const dataJSON=dataBuffer.toString()

const data=JSON.parse(dataJSON)
console.log(data)

data.name='aayush'
data.age=21
console.log(data)

const dataJson=JSON.stringify(data)
fs.writeFileSync('note.json',dataJson)