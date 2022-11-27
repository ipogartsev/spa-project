const { Schema, model } = require('mongoose')

const announcementSchema = new Schema({
  date: { type: Date, default: new Date().toString()},
  title: { type: String },
  user: { type: String, required: true },
  contact: { type: String },
  text: { type: String, required: true },
})


const Announcement = model('Announcement', announcementSchema)
module.exports = Announcement