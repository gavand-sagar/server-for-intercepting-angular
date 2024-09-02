const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())


app.get("/", (req, res) => {
    res.send("APP WORKS")
})


app.get("/get-data", (req, res) => {

    return res.status(400).send("Internal Server Error");


    res.json({
        message:"Hey this is some response from my own server!"
    })
})

app.listen(3001, () => {
    console.log("Listening")
})