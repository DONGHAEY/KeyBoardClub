"use strict"

const register = (req ,res) => { 
    res.render("register", {user:req.user}) 
}

module.exports = register