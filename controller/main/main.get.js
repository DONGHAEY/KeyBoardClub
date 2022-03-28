"use strict"

const {category, category_korean} = require("../../category.js")

const main = (req, res) => {
    res.cookie('redirect', req.originalUrl)
    res.render('main', {
        user: req.user,
        link_list : category,
        title : category_korean
    })
}

module.exports = main