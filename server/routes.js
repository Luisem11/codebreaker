const express = require('express')
const router = express.Router();
var secret = 0;

router.get('/', function (req, res) {
    res.json({
        message: 'API codebreker'
    });
});

router.get('/setsecret/:secret', function (req, res) {
    secret = req.params.secret;
    res.json({
        message: 'Ok, let the game begins'
    });
});

router.get('/guess/:number', function (req, res) {
    number = req.params.number;
    res.json({
        result: codebreaker(secret, number)
    });
});


function codebreaker(a, b) {
    let result = "";
    for (let i = 0; i < a.length; i++) {
        result = compare(a, b, i, result);
    }
    return result;
}

function compare(a, b, i, result) {
    return a.charAt(i) == b.charAt(i) ?
        "x" + result.slice(0) :
        a.includes(b.charAt(i)) ?
        result + "_" :
        result;
}

module.exports = router;