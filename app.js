var express = require('express');
var app = express();

const PORT = 3000; //localhost:3000 port on local machine

app.get('/', (req, res) => {
    res.send("Hey there!")
})

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})