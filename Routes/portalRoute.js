const express = require('express')
const router = express.Router()
const { TestingRoute } = require('../Controllers/get')

router.get('/', TestingRoute)

module.exports = router