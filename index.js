const express = require("express")
const path = require("path")
const mongoose = require('mongoose')
const port = require('./config.js').PORT
const db = require('./config.js').mongoURI
const app = express()
const Announcement = require('./models/Announcement.js')

// DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

// express bodyParser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files
app.use(express.static("public"))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.post("/help", (req, res) => {
    const { title, user, contact, text } = req.body
    console.log(req.body);
    const newAnnouncement = new Announcement({
        title,
        user,
        contact,
        text
      })
    newAnnouncement.save().then(() => {
    console.log('announcement saved');
    
    })
})



app.listen(port, () => {
    console.log(`server run on ${port}`);
})
