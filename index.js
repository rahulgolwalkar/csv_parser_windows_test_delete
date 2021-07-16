const csvParser = require('csv')
const fs = require('fs')


const data = fs.readFileSync('./win2.csv', 'utf8')

console.log(data)

let aaa = csvParser.parse(data, {
  // recordDelimiter: ['\n\r', '\r\n', '\n', '\r'] // uncommenting this line will get it to work - one more issue is that if the array is in a different order (say ['\n', '\r', '\n\r', '\r\n'])  - this will throw an error as well
}, function (err, parsedArr) {
  console.log(err)
  console.log(parsedArr)
})
