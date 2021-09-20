const Article = require('../model/article.js')


module.exports = {
    getHot: (req, res, next) => {
        Article.getHot(3).then(results => {
            req.hots = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    getList: (req, res, next) => {
        Article.getList().then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },


    getListByCategoryID: (req, res, next) => {
        let id = req.params.id
        Article.getListByCategoryID(id).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    getListByKeyWord: (req, res, next) => {
        let keyword = req.query.keyword
        Article.getListByKeyWord(keyword).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    getArticleID: (req, res, next) => {
        let id = req.params.id
        Article.getArticleID(id).then(results => {
            req.article = results
            next()
        }).catch(err => {
            next(err)
        })
    },
}