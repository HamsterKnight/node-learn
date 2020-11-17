const fs = require('fs')

fs.readFile('./file.txt', 'utf-8' ,(err, data) => {
    console.log(data)
})

const data = fs.readFileSync('./file.txt', 'utf-8')
console.log('data', data)

async function readFile() {
    const data =  await fs.promises.readFile('./file.txt', 'utf-8')

    console.log('promise utf-8 data', data)

    const raw =  await fs.promises.readFile('./file.txt')

    console.log('promise raw data', raw)
}
readFile()