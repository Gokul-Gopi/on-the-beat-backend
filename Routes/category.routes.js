const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Category = require('../Models/category.model')
const Video = require('../Models/video.model')

router.get('/', async (req, res) => {
    try {
        const category = await Category.find({})
        res.json({ categories: category })
    } catch (err) {
        res.json(err.message)
    }

})

router.get('/:categoryID', async (req, res) => {
    const categoryID = req.params.categoryID
    try {
        const videos = await Video.find({ category: categoryID })
        res.json({ videos })
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router