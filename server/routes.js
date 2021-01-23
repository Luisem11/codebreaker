const express = require('express')
const router = express.Router();
var secret = 0;

router.get('/', function (req, res) {
    res.status(200).json({

        message: 'API codebreker'
    });
});

router.get('/set-secret/:secret', function (req, res) {
    secret = req.params.secret;
    res.status(200).json({
        message: 'Ok, let the game begins'
    });
});

router.get('/get-secret/', function (req, res) {

    res.status(200).json({
        secret
    });
});


router.get('/guess/:number', function (req, res) {
    number = req.params.number;
    res.status(200).json({
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