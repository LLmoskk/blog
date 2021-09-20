// 文章子应用
const express = require('express')
const article = require('../middleware/article.js')
const category = require('../middleware/category.js')
const auth = require('../middleware/auth')
const articleApp = express()

articleApp.use(auth.getUser)

articleApp.get('/list/:id', [article.getListByCategoryID, category.getCategory, category.getNameById], (req, res) => {
    let { articles, categories, category, user } = req;
    res.render('list', { articles: articles, categories: categories, category: category, user: user })
})


articleApp.get('/:id', [category.getCategory, article.getArticleID, article.getPrevArticle, article.getNextArticle], (req, res) => {
    let { categories, article, prev, next, user } = req
    res.render('article', { categories: categories, article: article, prev: prev, next: next, user: user })
})

module.exports = articleApp;