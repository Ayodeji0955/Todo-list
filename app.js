const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.get('/', (req, res) => {
    // res.send('Hello');

    let today = new Date();
    let currentDate = today.getDate();

    if (currentDate === 6 || currentDate === 0) {
        res.write(__dirname + "/weekend.html")
    } else {
        res.sendFile(__dirname + "/weekday.html");
    }

});


app.listen(3000, function() {
    console.log('listening on port 3000')
})