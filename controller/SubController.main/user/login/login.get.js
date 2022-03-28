"use strict"

const login = (req ,res) => { 
    res.render("login", {user:req.user}) 
}

module.exports = login