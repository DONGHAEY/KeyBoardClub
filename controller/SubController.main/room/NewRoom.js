const express = require("express")
const router = express.Router()

const NewRoom_get = require("./NewRoom/NewRoom.get")

router.get("/", NewRoom_get)

module.exports = router