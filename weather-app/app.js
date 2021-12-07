const yargs = require('yargs')
const  temp  = require('./service.js')
const chalk=require('chalk')
// // const city=process.argv[2]

// const temp=(long,lati,callback)=>{
//   setTimeout(()=>{

//    const url="http://api.weatherstack.com/current?access_key=21fefb078b4c1fc5e71463cb9e5d3f57&query="+lati+","+long+""    

//    request({url:url},(error,response)=>{
//       if(error){
//          console.log(chalk.bgRed('Something went wrong'))
//       }
//    else if (response.body.error){
//    console.log(chalk.bgRed(response.body.error))
//    }
//       else{
//       const data=JSON.parse(response.body)
//       callback(data.current.temperature,data.current.feelslike,data.current.weather_descriptions[0])
//       }
//    })

//   },2000)

// }

// const lat=(address,callback)=>{
//   setTimeout(()=>{
//    url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYWxlcm9uIiwiYSI6ImNrbGI0cGw0YzByd2syb3M4bThmMHJ0NTIifQ.gki2IB19zQhALXe76z4JfA"
//    request({url:url,json:true},(error,response)=>{
//       if(error){
//          console.log(chalk.bgRed('Something went wrong'))

//       }
//       else if(response.body.features.length==0){
//          console.log(chalk.bgRed(response.body.message))
//       }
//       else{
//       const long=response.body.features[0].center[0]
//       const lati=response.body.features[0].center[1]
//       callback(long,lati)
//       }

//    })
//   },2000)
//   console.log("timer starts")
// }

yargs.command({
   command: "find",
   describe: "find latitude and logitude of address",
   builder: {
      add: {
         describe: "enter address",
         demandOption: true,
         type: "string"
      }
   },
   handler: function (argv) {
      temp(argv.add, (error,{feel_like,temp}) => {
         if(error){
            console.log(chalk.bgRed(error))
         }
         else{
         console.log(temp)
         console.log(feel_like)
         }
      })

   }

})

if (process.argv.length < 3) {
   console.info(chalk.bgRed('missing parameters'))
}
yargs.parse()