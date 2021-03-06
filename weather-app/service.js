const request = require('request')
const yargs = require('yargs')
const chalk = require('chalk')
// const city=process.argv[2]

const temp = (address, callback) => {
    lat(address, (error, data) => { 
        if (error) {
            callback(error, undefined)
        }
        else {
            const url = "http://api.weatherstack.com/current?access_key=21fefb078b4c1fc5e71463cb9e5d3f57&query=" + data.lati + "," + data.long + ""

            request({ url }, (error, response) => {
                if (error) {
                    console.log(chalk.bgRed('Something went wrong'))
                }
                else if (response.body.error) {
                    console.log(chalk.bgRed(response.body.error))
                }
                else {
                    const data = JSON.parse(response.body)
                    callback(undefined,{
                        temp: data.current.temperature,
                        feel_like: data.current.feelslike,
                        description: data.current.weather_descriptions[0]
                    })
                }
            })

        }

    })
}


const lat = (address, callback) => {
    setTimeout(() => {
        url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiYWxlcm9uIiwiYSI6ImNrbGI0cGw0YzByd2syb3M4bThmMHJ0NTIifQ.gki2IB19zQhALXe76z4JfA"
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                callback("no internet", undefined)

            }
            else if (response.body.features.length == 0) {
                callback("something went wrong", undefined)
            }
            else {
                const long = response.body.features[0].center[0]
                const lati = response.body.features[0].center[1]
                console.log(chalk.green('got the coordinates'))
                callback(undefined, {
                    long: long,
                    lati: lati
                })
            }

        })
    }, 2000)
    console.log("Finding coordinates...")
}

module.exports = temp   
