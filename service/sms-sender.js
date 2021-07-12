const accountSid = process.env.TW_ACCOUNT_SID;
const authToken = process.env.TW_AUTH_TOKEN;
const twNumber = process.env.TW_NUMBER;

const client = require("twilio")(accountSid, authToken);

const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

const entryPoint = (req, res) => {
    res.json({
        code: 0,
        message: "Welcome to SMS Sender RESTFul API"
    });
}

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

const connectSSH = () => {
    ssh.connect({
        host: '10.44.20.100',
        username: 'DTGAPP',
        password: 'AZERTY99',
        port: 22,
    }).then(function (resp) {
        console.info("conn response", resp);
        ssh.execCommand("?").then(function (response) {
            console.info("Stdout response\n", response.stdout);
        }, function (error) {
            console.error("Stdout error\n", error);
        })
    }, function (error) {
        console.info("conn error", error);
    });


}

module.exports = { sendSMS, connectSSH, entryPoint }