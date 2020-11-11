/* 
filename;
name;
ext;
isFile;
size;
createTime;
updateTime; 
getChildren 获取所有子文件
getContent 获取文件内容
*/
const fs = require('fs')
const path = require('path')
const filepath = path.resolve(__dirname, './myFile/')



class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  static async getFile(filepath) {
    const fileInfo = await fs.promises.stat(filepath);
    const filename = path.basename(filepath);
    const ext = path.extname(filepath);
    const isFile = fileInfo.isFile();
    const size = fileInfo.size;
    const createTime = fileInfo.birthtime;
    const updateTime = fileInfo.mtime;
    return new File(filepath, filename,ext, isFile, size, createTime, updateTime)
  }

  async getContent(isBuffer = false) {
    if (this.isFile) {
      if (isBuffer) {
        return await fs.promises.readFile(this.filename);
      }
        return await fs.promises.readFile(this.filename, 'utf-8');
    }
    return null;
  }
  // 获取当前目录下的内容
  async getChildren() {
    if(this.isFile) {
      return []
    } else {
      let dirlist = await fs.promises.readdir(this.filename)
      console.log(dirlist)
      dirlist = dirlist.map(async _ => {
        const filepath = path.resolve(this.filename, _)
        return File.getFile(filepath)
      })
      return Promise.all(dirlist)
    }
  }
  /* async getChildren() {
    if (this.isFile) {
      //文件不可能有子文件
      return [];
    }
    let children = await fs.promises.readdir(this.filename);
    children = children.map(name => {
      const result = path.resolve(this.filename, name);
      return File.getFile(result);
    });
    return Promise.all(children);
  } */
}
async function test() {
  const result = await File.getFile(filepath)
  console.log(await result.getContent())
  console.log(await result.getChildren())
}
test()