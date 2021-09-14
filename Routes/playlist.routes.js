const express = require('express')
const { authVerify } = require('../Controllers/user')
const { getUserPlaylists, createNewPlaylist, addVideoToPlaylist, deleteVideoFromPlaylist, deletePlaylist } = require('../Controllers/playlist')
const { getVideoByID, getPlaylistByID } = require('../Controllers/params')
const router = express.Router()


router.param('videoID', getVideoByID)
router.param('playlistID', getPlaylistByID)

router.get('/', authVerify, getUserPlaylists)
router.post('/:videoID', authVerify, createNewPlaylist)
router.post('/:playlistID/:videoID', authVerify, addVideoToPlaylist)
router.delete('/:playlistID/:videoID', authVerify, deleteVideoFromPlaylist)
router.delete('/:playlistID', authVerify, deletePlaylist)

module.exports = router