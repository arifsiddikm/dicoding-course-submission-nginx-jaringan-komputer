'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hallo, nama saya Arif Siddik Muharam<br>Saya sedang melakukan uji coba projek untuk Submission Dicoding Latihan instalasi Nginx di Amazon EC2 ^_^');
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
