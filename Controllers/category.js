const Category = require('../Models/category.model')
const Video = require('../Models/video.model')

const getCategories = async (req, res) => {
    try {
        const category = await Category.find({})
        res.json({ categories: category })
    } catch (err) {
        res.json(err.message)
    }
}

const getCategory = async (req, res) => {
    const categoryID = req.params.categoryID
    try {
        const videos = await Video.find({ category: categoryID })
        res.json({ videos })
    } catch (err) {
        console.log(err.message)
    }
}


module.exports = { getCategories, getCategory }