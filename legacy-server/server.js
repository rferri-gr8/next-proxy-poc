const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const port = 8080

// parse cookies
app.use(cookieParser())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    var cookie = req.cookies['session-token'];
    if (cookie === undefined) {
      var randomNumber = Math.random().toString();
      randomNumber = randomNumber.substring(2, randomNumber.length);
      res.cookie('session-token', randomNumber, { maxAge: 900000, httpOnly: true });
    }

    next();
  });


const echo = (req, res) => {
    res.send({
        method: req.method,
        cookies: req.cookies,
        headers: req.headers,
        query: req.query,
        path: req.path,
        body: req.body
    });
}

app.get('*', echo)
app.post('*', echo)

app.listen(port, () => console.log(`Example app listening on port ${port}!

http://localhost:${port}/
`));
