const express = require('express');
const app = express();
// 需要使用数据库服务使的 请求对象 服务/逻辑层
const connection = require('./mysql');
const path = require('path'); // 添加此行引入 path 模块
// 使用ejs模板
const ejs = require('ejs');

// 设置视图引擎为EJS
app.set('view engine', 'ejs');
// 指定视图目录
app.set('views', path.join(__dirname, 'views'));


// 设置静态文件目录（如果有需要）
app.use(express.static('public'));

// 定义路由，渲染页面
app.get('/', (req, res) => {
    connection.query('SELECT * FROM t_hero', (error, results, fields) => {
      if (error) throw error;
      const heroes = results;
      res.render('index', { heroes });
    });
  });

// 启动服务器，监听指定端口
app.listen(3000, () => {
    console.log('端口将在3000打开!');
  });