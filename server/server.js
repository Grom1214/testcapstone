const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const SERVER_PORT = 5464
const commentCtrl = require("./controller")


app.use(express.json())
app.use(express.static('public'))
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
  
app.get("/api/comments/get", commentCtrl.getAllComments);
app.post("/api/comments/new", commentCtrl.createComment);

app.listen(SERVER_PORT, () => console.log (`Listening to you on port ${SERVER_PORT}`))