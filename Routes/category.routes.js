const express = require('express')
const router = express.Router()

const { getCategories, getCategory } = require('../Controllers/category')

router.get('/', getCategories)
router.get('/:categoryID', getCategory)


module.exports = router