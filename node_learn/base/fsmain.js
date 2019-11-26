'use strict'

// 按照JavaScript的标准，异步读取一个文本文件的代码如下：
var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 下面的例子演示了如何读取一个图片文件：

