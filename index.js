const csvParser = require('csv')
const fs = require('fs')


const data = fs.readFileSync('./win2.csv', 'utf8')

console.log(data)

let aaa = csvParser.parse(data, {
  // recordDelimiter: ['\r\n', '\n', '\r', '\n\r']
}, function (err, parsedArr) {
  console.log(err)
  console.log(parsedArr)
})
