var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BFLEDXTikvATR2G8g9ozq6aK6q0U9Cd70xjR8T8QeMpvvOLmPRnqFBkmRFeV7SdTCfCh-KPyOorgG4ZL0rkVzLo",
   "privateKey": "Umpol7Nx9zDxNAYexguL_R4BKyQTMwK7n6507LuS5XM"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cnrrG45IH7w:APA91bFC2LsoUMvLMz-t0gSTJ0Zd0kFJAzgq7_hHKEBcZPTSRsw-kqCgGLf-oYtB9Z7lNKNN8J36CKx_PqbwtXs31q2xiNXonFWnUzYQeQgbiJ60XPrsSMwu4RSjT6bYz2ViL36KtQ9J",
   "keys": {
       "p256dh": "BMcihxjx2Pr5sGzA3U98Rh+IZoleOFR5UjGwBDU42HrZzTTbJx0FIAAEQlkjjKDmFKOh7tOxyUJhp0OAC1s8130=",
       "auth": "rFZPsP+yriIW0tYcb77bng=="
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