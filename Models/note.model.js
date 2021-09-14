const mongoose = require('mongoose')
const { Schema } = mongoose

const childSchema = new Schema({
    note: {
        type: String,
        trim: true
    },
    timeStamp: {
        type: String,
        trim: true
    }
})


const notesSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    videoID: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },

    notes: [childSchema],

}, { timestamps: true })

const Notes = mongoose.model('Note', notesSchema)
module.exports = Notes