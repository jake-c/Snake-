const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000; //localhost:3000 port on local machine

app.use(express.static('public')) //Send static assets in public folder once requested

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snake.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})