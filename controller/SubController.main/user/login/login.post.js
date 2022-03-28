"use strict"

const {User} = require("../../../../models/user")

const login = (req, res) => {
    const {id, password} = req.body
    User.findOne({"id": id}, (err, user) => {
        if (err) throw err
        else if(!user) {
            return res.redirect("/login")
        }
        user.comparePassword(password, (err1, isMatch)=> {
            if(err1) throw err1
            else if (!isMatch) return res.redirect("/login")
            user.generateToken((err2, user1) => {
                if(err2) return res.redirect("/login")
                return res.cookie("auth", user.token).redirect(req.cookies.redirect)
            })
        })
    })
}

module.exports = login