const express = require("express");
const router = express.Router();
const smsSenderService = require("../service/sms-sender");

router.get("/", smsSenderService.entryPoint);
router.post("/send-sms", smsSenderService.sendSMS);

module.exports = router;