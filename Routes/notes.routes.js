const express = require('express')
const router = express.Router()
const { authVerify } = require('../Controllers/user')
const { addToNotes, getNotes, deleteFromNotes } = require('../Controllers/note')


router.get('/', authVerify, getNotes)
router.post('/:videoID', authVerify, addToNotes)
router.delete('/:videoID', authVerify, deleteFromNotes)

module.exports = router