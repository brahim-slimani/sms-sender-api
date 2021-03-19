const accountSid = process.env.TW_ACCOUNT_SID;
const authToken = process.env.TW_AUTH_TOKEN;
const twNumber = process.env.TW_NUMBER;

const client = require("twilio")(accountSid, authToken);

const sendSMS = (req, res) => {
    const payload = req.body;
    client.messages.create({
        body: payload.content,
        from: twNumber,
        to: payload.number
    }).then((response) => {
        console.info("success =>", response);
        res.json({ code: 0, message: "SMS sent successfully", result: response })
    }, error => {
        console.info("error =>", error);
        res.json({ code: -1, message: "Error sending SMS", error });
    })

}