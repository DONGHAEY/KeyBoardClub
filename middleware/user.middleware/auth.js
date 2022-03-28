"use strict"

const mongoose = require("mongoose")

const { User } = require("../../models/user");

const auth = (token, cb) => {
    User.findByToken(token, (err, user) => {
        cb(err, user);
    })
}

const AuthMiddleware = (req, res ,next) => {
    const key = req.cookies.auth
    auth(key , async (err, user) => {
        if (err) throw err
        else if (!user) {
            req.user = null
            return next()
        }
        req.user = user
        return next()
    })
}

module.exports = AuthMiddleware