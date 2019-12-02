var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BMsxnomRkfaSjXjqr3MzD90v2Nvc0MWNn1enhrfzmqpnuKsTXkN7jhcI8qZw0cLwjfL4NklU3qmvgAYsG6HHt54",
   "privateKey": "Qk4vRHKnSSE28PA3K2-PSE6-nalJzED5JpDyZVX8C5A"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/egpveAo9tD0:APA91bEYGvFvAyFClYHCLjOqXijUumRLbqNCtzuLB91ZP6Yj4lpGRQhWcHXensrAgWCRuibqw0uXcbmFSJPpXjFD01oKO5OiAhPtSQNABhk8xg_RQ6IwEw3R-nGox5zNrSlE7HiTBrmq",
   "keys": {
       "p256dh": "BErfWTOO8hUMY5viZ8asjnr7nFxR2YaeMI5BzllChLKKulVYk4JoIr/v/UVW1jsrd5/cPSBKdcYaeEiHVPSJ/Is=",
       "auth": "ezbqKl6p9tuFAvPFdd2jgQ=="
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