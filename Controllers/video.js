const Video = require('../Models/video.model')

const getVideoByID = async (req, res) => {
    const { id } = req.params
    try {
        const video = await Video.findById(id)
        res.json({ video })
    } catch (err) {
        res.status(400).json({ response: error.message });
    }
}

module.exports = { getVideoByID }