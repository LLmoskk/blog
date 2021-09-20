const Category = require('../model/category.js')


module.exports = {
    getCategory: (req, res, next) => {
        Category.getCategory().then(results => {
            req.categories = results
            next()
        }).catch(err => {
            next(err)
        })
    },

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