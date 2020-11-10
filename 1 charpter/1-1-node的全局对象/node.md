node中的全局对象

1. setTimeout 定时器

2. setInterval  循环定时器

3. setImmediate 类似 setTimeout(()=>(), 0)


4. global类似浏览器中的window

> global中有一个属性global，这个属性的引用就是global自己

5. __dirname 当前文件的目录（非执行目录）(非global属性)

6. __filename 当前文件的绝对路径（非global属性）

7. Buffer
    7.1 类型化数组
    7.2 继承自 UInt8Array
    7.3 计算机中存储的基本单位：字节
    3.4 使用时、输出时可能需要用十六进制表示

8. process(进程)
>  process.cwd() 返回当前node进程的执行路径，一个绝对路径

>  process.exit() 强制退出当前node进行，可传入状态码，默认正常状态退出传入状态0【例如：process.exit(0)】,非正常传入其他状态

>  process.argv 获取当前命令中的参数， 是一个String数组

>  process.platform 标识当前操作系统（输出值是win32，标识可运行再win32以上的系统）

>  process.kill(pid) 根据进程id杀死进程，每个进程id，运行的时候都是随机的

>  process.env 获取当前环境变量


