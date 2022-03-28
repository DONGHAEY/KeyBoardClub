"use strict"

const {User} = require("../../../../models/user")

const logout = (req, res) => {
    const key = req.cookies.auth
    User.findOneAndUpdate({token:key}, { token:""}, (err, user)=> {
        if(err) throw err
        return res.redirect(req.cookies.redirect)
    })
}

module.exports = logout