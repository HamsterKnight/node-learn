const fs = require('fs')
const path = require('path')
const filename = path.resolve(__dirname, 'test2.txt')
const copyfile = path.resolve(__dirname, 'copyfile.txt')
const rs = fs.createReadStream(filename, {
    highWaterMark: 1024 * 64
})
const ws = fs.createWriteStream(copyfile)


rs.on('open', () => {
    console.log('开始读取文件')
})

rs.on('data', (chunk) => {
   const flag =  ws.write(chunk) // 如果返回值为flase,证明正在传输的内容已经占满通道，产生被压
   console.log('写入了')
   if(!flag) {
    rs.pause()
   }
})

// 当可以继续传输数据的时候，会触发drain事件
ws.on('drain', flag => {
    rs.resume()
})

rs.on('close', ()=> {
    console.log('读取完成')
})

