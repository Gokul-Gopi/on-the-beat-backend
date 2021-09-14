const Playlist = require('../Models/playlist.model')


const defaultPlaylists = ['Liked Videos', 'Watch Later']

const getUserPlaylists = async (req, res) => {
    const { userID } = req
    const playlists = await Playlist.find({ userID })


    if (!playlists.length) {
        const playlistsToBeAdded = defaultPlaylists.map(playlist => ({
            userID,
            name: playlist,
            videos: []
        }))

        try {
            const createdPlaylist = await Playlist.insertMany(playlistsToBeAdded)
            res.json({ playlists: createdPlaylist })
        } catch (err) {
            console.log(err.message)
        }

    } else {

        try {
            const addingVideos = await playlists.map(playlist => {
                return playlist.populate('videos.video').execPopulate()
            })

            const allPlaylist = await Promise.all(addingVideos)
            res.json({ playlists: allPlaylist })

        } catch (err) {
            console.log(err.message)
        }

    }

}

const addVideoToPlaylist = async (req, res) => {
    const { playlistID } = req.params
    const { video } = req

    const playlist = await Playlist.findById(playlistID)
    try {
        if (!playlist.videos.id(video._id)) {
            const videoTobeAdded = { _id: video._id, video: video._id }
            playlist.videos.push(videoTobeAdded)
            await playlist.save()
            await playlist.populate('videos.video').execPopulate()
            res.json({ success: true, playlist })
        } else {
            res.json({ success: false, playlist })
        }


    } catch (err) {
        console.log(err.message)
    }

}

const createNewPlaylist = async (req, res) => {
    const { userID, video } = req
    const { name } = req.body


    const newPlaylist = new Playlist({
        userID,
        name,
        videos: [{ _id: video._id, video: video._id }]
    })

    try {
        await newPlaylist.save()
        await newPlaylist.populate('videos.video').execPopulate()
        res.json({ playlist: newPlaylist })

    } catch (err) {
        console.log(err.message)
    }

}

const deleteVideoFromPlaylist = async (req, res) => {
    const { videoID, playlistID } = req.params
    const { playlist } = req

    try {
        await playlist.videos.id(videoID).remove()
        await playlist.save()
        const userPlaylist = await Playlist.findById(playlistID)
        await userPlaylist.populate('videos.video').execPopulate()
        res.json({ playlist: userPlaylist })
    } catch (err) {
        console.log(err.message)
    }
}

const deletePlaylist = async (req, res) => {
    const { playlistID } = req.params

    try {
        await Playlist.remove({ _id: playlistID })
        res.json({ removedPlaylistID: playlistID })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getUserPlaylists, addVideoToPlaylist, createNewPlaylist, deleteVideoFromPlaylist, deletePlaylist }