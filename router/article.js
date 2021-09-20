// 文章子应用
const express = require('express')
const article = require('../middleware/article.js')
const category = require('../middleware/category.js')

const articleApp = express()


articleApp.get('/list/:id', [article.getListByCategoryID, category.getCategory, category.getNameById], (req, res) => {
    let { articles, categories, category } = req;
    res.render('list', { articles: articles, categories: categories, category: category })
})


articleApp.get('/:id', [category.getCategory, article.getArticleID], (req, res) => {
    let { categories, article } = req
    res.render('article', { categories: categories, article: article })
})

module.exports = articleApp;