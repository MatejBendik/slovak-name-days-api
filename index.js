const express = require('express')
const path = require('path');
const app = express()
const port = 8000 || process.env.PORT

const fileName = "slovak-nameday-list.json";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, fileName));
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
