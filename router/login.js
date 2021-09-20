
const express = require('express')
const User = require('../model/user')

const loginApp = express()
loginApp.get('/', (req, res) => {
    res.render('login', { msg: '' })
})

loginApp.post('/', (req, res, next) => {
    let { username, password } = req.body
    User.login(username, password).then(results => {
        if (results) {
            // session存储 
            req.session.user = results
            res.redirect('/')
        } else {
            res.render('login', { msg: '登陆失败' })
        }

    }).catch(err => {
        next(err)
    })
})

module.exports = loginApp;