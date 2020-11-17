const fs = require('fs')
const path  = require('path')
const filename = path.resolve(__dirname, './test2.txt')


const ws = fs.createWriteStream(filename, {
    autoClose: true,
    highWaterMark: 16 * 1024
})
let i = 0;
//一直写，直到到达上限，或无法再直接写入
function write() {
  let flag = true;
  while (i < 1024 * 1024 && flag) {
    flag = ws.write("a"); //写入a，得到下一次还能不能直接写
    i++;
  }
}

write();

// 数据写入完成后，继续协会，避免背流
ws.on("drain", () => {
  write();
});