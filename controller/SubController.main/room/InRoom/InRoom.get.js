"use strict"

const {category, category_korean} = require("../../../../category")

const InRoom = (req, res) => {
    res.render('room', {
        user: req.user,
        category_korean : category_korean[req.category],
        category: req.category,
        room_key : req.room_key
    });// index.ejs을 사용자에게 전달
}

module.exports = InRoom