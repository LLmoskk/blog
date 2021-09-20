module.exports = class User extends require('./model') {
    static login(username, password) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,username FROM `user` WHERE username = ? AND PASSWORD = ?'
            this.query(sql, [username, password]).then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log(`登录失败：${err.message}`)
                reject(err)
            })
        })
    }

}