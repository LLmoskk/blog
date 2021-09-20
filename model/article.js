module.exports = class Article extends require('./model.js') {

    // 热门推荐
    static getHot(num) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,`time` FROM article WHERE hot = 1 LIMIT ?'
            this.query(sql, num).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取热门推荐文章失败：${err.message}`)
                reject(err)
            })
        })
    }

    // 最新博文
    static getList() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,`time` FROM article ORDER BY TIME DESC'
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取最新博文失败：${err.message}`)
                reject(err)
            })
        })
    }

    // 文章类别
    static getListByCategoryID(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,`time` FROM article WHERE category_id = ? ORDER BY TIME DESC'
            this.query(sql, id).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取文章类别失败：${err.message}`)
                reject(err)
            })
        })
    }

    // 通过指定关键字
    static getListByKeyWord(keyword) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,title,content,`time` FROM article WHERE title LIKE ? ORDER BY TIME DESC'
            this.query(sql, `%${keyword}%`).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取关键字文章失败：${err.message}`)
                reject(err)
            })
        })
    }

    // 通过id获取指定文章
    static getArticleID(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT a.id,a.title,a.content,a.`time`,a.hits,a.`category_id`,a.`url`,c.`name`,a.`thumbnail`,a.`hot` FROM article a,category c WHERE a.`category_id` = c.`id` AND a.id = ?'
            this.query(sql, id).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log(`获取指定文章失败：${err.message}`)
                reject(err)
            })
        })
    }
}