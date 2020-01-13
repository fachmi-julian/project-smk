const login = require('../controller/loginController')

module.exports = app => {
    app.post('/login',login.login)
}