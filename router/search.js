// 搜索子应用
const express = require('express')
const article = require('../middleware/article.js')
const category = require('../middleware/category.js')
const auth = require('../middleware/auth')
const searchApp = express()


searchApp.get('/', [article.getListByKeyWord, category.getCategory, auth.getUser], (req, res) => {
    let { articles, categories, user } = req;
    res.render('search', { articles: articles, categories: categories, keyword: req.query.keyword, user: user })
})

module.exports = searchApp;