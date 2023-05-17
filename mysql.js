// ! 这相当于我们 java 里面的数据处理 dao 层
// 1.导包
const mysql = require('mysql');


// 2.包含了登录信息的对象
const connection = mysql.createConnection({
    host: '114.215.253.31',
    user: 'test_data',
    password: 'whxh_ljr',
    database: 'test_data'
  });


// 3.连接方法
connection.connect(function (err){
    if (err) {
        console.error('连接到MySQL数据库时出错: ' + err.stack);
        return;
    } 
    console.log('以ID: '+ connection.threadId+' 身份连接到MySQL数据库');
});
// 4.使 mysql.js 模块化 (类化)
module.exports = connection;