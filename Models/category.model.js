const mongoose = require('mongoose')
const { Schema } = mongoose


// const childSchema = new Schema({
//     _id: {
//         type: Schema.Types.ObjectId,
//         ref: 'Video'
//     }

// })


const categorySchema = new Schema({

    name: {
        type: String,
        required: 'Category name is required'
    },

    image: {
        type: String,
        required: 'Image is required'
    }


}, { timestamps: true })



const category = mongoose.model('Category', categorySchema)

module.exports = category
