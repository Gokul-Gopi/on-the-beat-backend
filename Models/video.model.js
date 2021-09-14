const mongoose = require('mongoose')
const { Schema } = mongoose

const videoSchema = new Schema({

    videoID: {
        type: String,
        required: 'VideoID is required',
        unique: 'VideoID should be unique'
    },

    name: {
        type: String,
        required: 'Video name is required'
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

    date: {
        type: String,
        required: 'Date of upload is required'
    },

    views: {
        type: String,
        required: 'Views are required'
    },

    description: {
        type: String,
        required: 'Description is required'
    },

    channelName: {
        type: String,
        required: 'Channel name name is required'
    },

    channelImage: {
        type: String,
        required: 'Video name is required'
    },

}, { timestamps: true })

const video = mongoose.model('Video', videoSchema)

module.exports = video
