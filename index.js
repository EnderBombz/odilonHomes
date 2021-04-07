const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const routers = require('./routes/router')


app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
        'application/x-www-form-urlencoded',
    )
    res.header('--max-http-header-size')
    next()
})

app.use(cors({
    origin: "steam://rungameid/892970",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("OdilonValhala - REST API - (2021)");
})

app.use(routers);

app.listen(process.env.PORT || 3000)