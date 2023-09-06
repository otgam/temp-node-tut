const { readFileSync, writeFileSync } = require('fs')
console.log('start')
//we use this function to read the content of a file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//we use this function to create a file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }//to add new line
)
console.log('done with this task')
console.log('starting the next one')