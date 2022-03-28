const express = require('express')
const router = express.Router()

const main = require("./Main")
const NewRoom = require("./NewRoom")
const InRoom = require("./InRoom")

router.use("/", main)
router.use("/new", NewRoom)
router.use("/:room_key", (req, res, next) => { req.room_key =  req.params.room_key; next()} ,InRoom) //룸이 존재하는지 확인하는 MiddleWare 넣기

module.exports = router