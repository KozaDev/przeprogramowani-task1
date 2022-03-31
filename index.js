const Mailer = require("./mailer.js");
const PushNotification = require("./push-notification.js");
const smsService = require("./sms-service");

function send(message) {
  this.sendMessage(message);
}

const sendMail = send.bind(new Mailer());
const pushNotification = send.bind(new PushNotification());
const sendSms = send.bind(smsService);

sendMail("Mail");
pushNotification("notification");
sendSms("sendSms");
