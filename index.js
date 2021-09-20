// 引入express框架
const express = require('express');
// 创建服务器网站  
const app = express();

// 设置ejs 修改文件后缀为html
app.engine('html', require('ejs').renderFile)
app.set('views', `${__dirname}/views`)
app.set('view engine', 'html');

// 静态资源配置
app.use(express.static('static'))

// 调用首页子应用
app.use('/', require('./router/index'))
app.use('/index', require('./router/index'))
app.use('/article', require('./router/article'))
app.use('/search', require('./router/search'))
app.use((req, res) => {
    res.render("404.html")
})


// 监听端口
app.listen(5333);


