// 引入express框架
const express = require('express');
const session = require('cookie-session')

// 创建服务器网站  
const app = express();

// 设置ejs 修改文件后缀为html
app.engine('html', require('ejs').renderFile)
app.set('views', `${__dirname}/views`)
app.set('view engine', 'html');

// 静态资源配置
app.use(express.static('static'))

// POST处理
app.use(express.urlencoded({ extended: true }))

// SESSION配置
app.use(session({
    keys: ['secret'],
    maxAge: 1000 * 60 * 30
}))

// 首页
app.use('/', require('./router/index'))
app.use('/index', require('./router/index'))
// 文章
app.use('/article', require('./router/article'))
// 搜索
app.use('/search', require('./router/search'))
// 登录
app.use('/login', require('./router/login'))


app.get('/user/logout', (req, res) => {
    req.session.user = null
    res.render('login', { msg: '退出成功' })
})


app.use((req, res) => {
    res.render("404.html")
})
// 监听端口
app.listen(3333);


