const siswa = require('../model/m_siswa')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWTsceret = process.env.JWT_SECRET

exports.login = async(req,res,err) => {
    
    const login = await siswa.findOne({
        email:req.body.email,
        password:req.body.password
    })
    if (login.email) {
        
    } else {
        
    }
    const tokens = jwt.sign({login}, JWTsceret, (err,token) => {
        if (err) {
            res.send(JSON.stringify('invalid usernaame and passsword'))
        } else {
            res.send(JSON.stringify(`Anda Berhasil Login token:${token}`))
        }
        
    })
    
}