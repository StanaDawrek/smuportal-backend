const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    min: 2,
    max: 255
  },
  Author: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  ISBN: {
    type: Number,
    unique: true,
    required: true,
    min: 1000000000,
    max: 9999999999999,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value"
    }
  },
  description: {
    type: String
  },
  publishDate: {
    type: Date,
    required: true
  },
  pageCount: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value"
    }
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  NumberOfCopies: {
    type:Number,
    required:true,
    min:1,
  },
  imagePath: { type: String, required: true },
  //coverImage: {
    //type: Buffer,
    //required: true
  //},
  //coverImageType: {
    //type: String,
    //required: true
  //}
})

//bookSchema.virtual('coverImagePath').get(function() {
  //if (this.coverImage != null && this.coverImageType != null) {
    //return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
  //}
//})

module.exports = mongoose.model('Book', bookSchema)
