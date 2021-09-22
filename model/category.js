module.exports = class Category extends require('./model.js') {

    // 导航栏文章类别
    static getCategory() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,`name` FROM category ORDER BY `index` DESC'
            this.query(sql).then(results => {
                resolve(results)
            }).catch(err => {
                console.log(`获取类别失败：${err.message}`)
                reject(err)
            })
        })
    }

    // 通过类别获取名称
    static getNameById(id) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT `name` FROM category WHERE id = ?'
            this.query(sql, id).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log(`获取指定编号类目失败：${err.message}`)
                reject(err)
            })
        })
    }
}