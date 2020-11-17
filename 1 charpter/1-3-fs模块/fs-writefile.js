
const fs = require('fs')

const raw = fs.readFileSync('./file.txt')
  fs.writeFileSync('./copy2.txt', raw);