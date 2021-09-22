const Category = require('../model/category.js')


module.exports = {

    // 导航栏文章类别
    getCategory: (req, res, next) => {
        Category.getCategory().then(results => {
            req.categories = results
            next()
        }).catch(err => {
            next(err)
        })
    },

    // 通过类别获取名称
    getNameById: (req, res, next) => {
        let id = req.params.id;
        Category.getNameById(id).then(results => {
            req.category = results
            next()
        }).catch(err => {
            next(err)
        })
    },
}