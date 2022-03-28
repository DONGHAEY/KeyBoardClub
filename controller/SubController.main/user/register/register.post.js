"use strict"

const { User } = require("../../../../models/user")

const register = (req, res) => {
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) throw err
        return res.redirect("/login")
    })
}

module.exports = register