const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.sendFile(__dirname + '/views/intro.html');
})

module.exports = router