const showText = require('fs');
// console.log('\n\tsolarSystem.txt:')
showText.readFile('solarSystem.txt', (err, data)=>{
    console.log('' + data)
})

console.log()