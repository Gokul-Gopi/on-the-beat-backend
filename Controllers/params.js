const Video = require('../Models/video.model')
const Playlist = require('../Models/playlist.model')

const getVideoByID = async (req, res, next, id) => {
    try {
        const video = await Video.findById(id)
        req.video = video
        next()
    } catch (err) {
        return console.log(err.message)
    }

}

const getPlaylistByID = async (req, res, next, id) => {
    try {
        const playlist = await Playlist.findById(id)
        req.playlist = playlist
        next()
    } catch (err) {
        return console.log(err.message)
    }
}

module.exports = { getVideoByID, getPlaylistByID }