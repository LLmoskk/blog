// 搜索子应用
const express = require('express')
const article = require('../middleware/article.js')
const category = require('../middleware/category.js')

const searchApp = express()


searchApp.get('/', [article.getListByKeyWord, category.getCategory], (req, res) => {
    let { articles, categories } = req;
    res.render('search', { articles: articles, categories: categories, keyword: req.query.keyword })
})

module.exports = searchApp;