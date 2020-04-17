const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwtHelper = require('./jwtHelper');
require('dotenv').config();
const PORT = process.env.PORT;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('views'))
app.post("/auth", async (req, res) => {
    if (req.body.username == "email@gmail.com" && req.body.password == "12345678") {
        let ACCESS_TOKEN = await jwtHelper.generateToken({ email: req.body.username }, accessTokenSecret);
        res.status(200).json({ accessToken: ACCESS_TOKEN });
    } else {
        res.status(401).json("false");
    }
})
app.listen(PORT,()=>{
console.log('port = '+ PORT);
});