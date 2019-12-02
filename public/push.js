var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BMsggVrUWQccM2V2w7IaCSWFYS3gkgJDUo7BSduZuzItpreRpdVxERd-hOMT7dLFIgFGludYcTf4yfIXtaNDId8",
   "privateKey": "3hZxW5a8nvfqou84ezWvGA0aeNxfz2cFt5r2rww283E"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cSk8gs2WZbA:APA91bFITGoXmrkz5OgSETlyxT1LvL3GtK1u-x-YaAQdiu8chGiIbyd8qMHMXcCee1Lfh4MtcdmGUZKEGmywRnkT8l-IY0UongY3Bc977f1WNcwRk4uUcBnYY-DeBnvynkH8ipzRhm8m",
   "keys": {
       "p256dh": "BFFp/TWpZjrU0WJ1nYhTipipAgaunFuoycGGUT2U7CLyGT/vjLKmCzeO4M6MlFawQAmToBcrKDXd/aEVc3JYA3U=",
       "auth": "N6Fj6qYixtQNdXtCKtvwnw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '126412035648',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);