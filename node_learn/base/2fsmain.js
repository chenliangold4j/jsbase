'use strict'

// 按照JavaScript的标准，异步读取一个文本文件的代码如下：
var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        // 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。

        // Buffer对象可以和String作转换，例如，把一个Buffer对象转换成String：

        // Buffer -> String
        var text = data.toString('utf-8');
        console.log(text);
        // 或者把一个String转换成Buffer：

        // String -> Buffer
        var buf = Buffer.from(text, 'utf-8');
        console.log(buf);

    }
});

// 下面的例子演示了如何读取一个图片文件：


fs.readFile('test.jpeg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // console.log(data);
        console.log(data.length + ' bytes');
    }
});

// 同步读文件
var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);

// 如果同步读取文件发生错误，则需要用try...catch捕获该错误：

// 写文件
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

// 和readFile()类似，writeFile()也有一个同步方法，叫writeFileSync()：
var data = 'Hello, Node.js sync';
fs.writeFileSync('output.txt', data);

// 我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

