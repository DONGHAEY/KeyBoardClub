"use strict"

const {category, category_korean} = require("../../../../category")

const Main = (req, res) => {
    res.cookie('redirect', req.originalUrl)
    res.render('index', {
        user: req.user,
        category_korean : category_korean[req.category],
        category: req.category
    });// index.ejs을 사용자에게 전달
}

module.exports = Main