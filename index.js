
// const accountSid = process.env.TW_ACCOUNT_SID;
// const authToken = process.env.TW_AUTH_TOKEN;

// const client = require("twilio")(accountSid, authToken);

// const sendSMS = () => {
//     console.info("> Start sending sms...");
//     client.messages.create({
//         body: "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ok ?.",
//         from: "+14248886846",
//         to: "+213554544931"
//     }).then((response) => {
//         console.log("success", response);
//     }, error => {
//         console.log("error ==> ", error);
//     });
// }

//sendSMS();


const app = require("./config/express.config");
const port = 4000;
app.listen(4000, () => {
    console.log(`> SERVER RUNNING ON: ${port}`);
});

const service = require('./service/sms-sender');
service.connectSSH();
