const fs = require('fs')
const path = require('path')
const filename = path.resolve(__dirname, './test.txt')
const rs = fs.createReadStream(filename, {
    autoClose: true,
    encoding: 'utf-8',
    highWaterMark: 1 // 每次传输3个字节
})

rs.on('open', () => {
    console.log('文件打开时触发')
})

rs.on('data', chunk => {
    console.log('读取到一部分数据时触发', chunk.toString())
    rs.pause()
    console.time('计时器')
    setTimeout(()=>{
        rs.resume()
        console.time('计时器')
    }, 500)
})

// rs.pause() 调用该方法，会暂停文件读取
// fs.resume() 调用该方法，恢复文件读取

rs.on('error', err => {
    console.log('读取文件报错时触发', err)
})


rs.on('end', () => {
    console.log('文件读完后触发')
})

rs.on('close', () => {
    console.log('文件被关闭后触发')
})