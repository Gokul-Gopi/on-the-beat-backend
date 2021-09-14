const express = require('express')
const router = express.Router()
const { getVideoByID } = require('../Controllers/video')



router.get('/:id', getVideoByID)

module.exports = router