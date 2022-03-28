const express = require('express')
const router = express.Router()

const { category } = require("../category.js")

const rooms = require("./SubController.main/room/room")

const main_get = require("./main/main.get")
const {login, register, logout} = require("./SubController.main/user/users")

router.get("/", main_get)

category.forEach(e => {
    router.use(`/${e}`, (req, res, next) => {req.category = e; next()}, rooms)
})

router.use("/login", login)
router.use("/logout", logout)
router.use("/register", register)

module.exports = router