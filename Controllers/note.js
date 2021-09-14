const Note = require('../Models/note.model')


const getNotes = async (req, res) => {
    const { userID } = req

    try {
        const allNotes = await Note.find({ userID })
        if (allNotes) {
            res.json({ notes: allNotes })
        } else {
            res.json({ notes: [] })
        }
    } catch (err) {
        console.log(err.message)
    }

}

const addToNotes = async (req, res) => {
    const { videoID } = req.params
    const { note, timeStamp } = req.body
    const { userID } = req

    const notesOfTheVideo = await Note.findOne({ videoID, userID })

    if (!notesOfTheVideo) {
        try {
            const newNote = new Note({
                userID,
                videoID,
                notes: [
                    { note, timeStamp }
                ]

            })
            await newNote.save()
            const notes = await Note.find({ userID })
            res.json({ notes })

        } catch (err) {
            res.status(400).json({ Error: err.message })
        }

    } else {
        try {
            const newNote = { note, timeStamp }
            await notesOfTheVideo.notes.push(newNote)
            await notesOfTheVideo.save()
            const notes = await Note.find({ userID })
            res.json({ notes })
        } catch (err) {
            res.status(400).json({ Error: err.message })
        }
    }


}

const deleteFromNotes = async (req, res) => {
    const { userID } = req
    const { videoID } = req.params
    const { noteID } = req.body

    try {
        const notesOfTheVideo = await Note.findOne({ videoID, userID })
        await notesOfTheVideo.notes.id(noteID).remove()
        await notesOfTheVideo.save()
        const notes = await Note.find({ userID })
        res.json({ notes })

    } catch (err) {
        console.log(err.message)
    }
}

module.exports = { getNotes, addToNotes, deleteFromNotes }