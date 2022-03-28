const express = require('express')
const router = express.Router()

const logout_get = require("./logout/logout.get")

router.get('/', logout_get)

module.exports = router