// 读取目录下的所有文件，返回一个数组
const fs = require('fs')
const path = require('path')
const fileDir = path.resolve(__dirname, './myFile')
async function test() {
  const dirList = await fs.promises.readdir(fileDir)
  console.log(dirList)
}
test()