const express = require("express");
const router = express.Router();
const smsSenderService = require("../service/sms-sender");

router.get("/", (req, res) => {
    res.json({
        code: 0,
        message: "Hi From SMS Sender RESTFul API"
    })
});

router.post("/send-sms", smsSenderService.sendSMS);

module.exports = router;