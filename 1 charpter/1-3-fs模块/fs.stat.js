const fs = require('fs')
const path = require('path')
const filename = path.resolve(__dirname, './test.txt')

async function test() {
  const stat = await fs.promises.stat(filename)
  console.log(stat.isDirectory())
}
test()


