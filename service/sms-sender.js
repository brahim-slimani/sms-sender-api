const accountSid = process.env.TW_ACCOUNT_SID;
const authToken = process.env.TW_AUTH_TOKEN;
const twNumber = process.env.TW_NUMBER;

const client = require("twilio")(accountSid, authToken);

const sendSMS = (req, res) => {
    const payload = req.body;
    client.messages.create({
        body: payload.smsContent,
        from: twNumber,
        to: payload.phoneNumber
    }).then((response) => {
        console.info("success =>", response);
        res.json({ code: 0, message: "Your sms has been sent successfully", result: response })
    }, error => {
        console.info("error =>", error);
        let errorMessage = `Error has been occured. ${error.message}`;
        res.json({ code: -1, message: errorMessage, result: error });
    });

}

module.exports = { sendSMS }