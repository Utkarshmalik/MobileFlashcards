import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';

export default class NotificationService {
  //onNotificaitn is a function passed in that is to be called when a
  //notification is to be emitted.
  constructor(onNotification) {
    this.configure(onNotification);
    this.lastId = 0;
  }

  configure(onNotification) {
    PushNotification.configure({
      onNotification: onNotification,

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      popInitialNotification: true,
    });
  }



  //Appears after a specified time. App does not have to be open.
  scheduleNotification() {

    AsyncStorage.getItem('notification')
      .then(data => JSON.parse(data))
      .then(data => {

        if (data === null) {

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(20)
          tomorrow.setMinutes(0)

          this.lastId++;
          PushNotification.localNotificationSchedule({
            date: tomorrow,
            title: "Scheduled Notification",
            message: "My Notification Message",
            playSound: true,
            soundName: 'default',
          });

          AsyncStorage.setItem("notification", JSON.stringify(true))
            .catch(err => console.og(err))

        }
      })
  }

  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }
  cancelNotif() {
    PushNotification.cancelLocalNotifications({ id: '' + this.lastId });
  }
  cancelAll() {
    PushNotification.cancelAllLocalNotifications();

    AsyncStorage.removeItem("notification")
      .catch(err => console.og(err))
  }
}