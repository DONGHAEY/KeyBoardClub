const express = require("express")
const router = express.Router()

const InRoom_get = require("./InRoom/InRoom.get")

router.get("/", InRoom_get)

module.exports = router