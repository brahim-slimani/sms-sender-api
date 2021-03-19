const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        code: 0,
        message: "Hi From SMS Sender RESTFul API"
    })
})

module.exports = router;