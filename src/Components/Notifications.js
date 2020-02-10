import PushNotification from 'react-native-push-notification';

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

  //Appears right away 
  localNotification() {
    this.lastId++;
    PushNotification.localNotification({
      title: "Reminder for quiz",
      message: "You havent appeared for a quiz today",
      playSound: false,
      soundName: 'default',
      actions: '["Yes", "No"]'
    });
  }

  //Appears after a specified time. App does not have to be open.
  scheduleNotification() {

    this.lastId++;
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(20)
    tomorrow.setMinutes(0)

    PushNotification.localNotificationSchedule({
      git 
          date: tomorrow,
      title: "Reminder for quiz",
      message: "You havent appeared for a quiz today",
      playSound: true,
      soundName: 'default',
    });
  }

  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  cancelNotif() {
    PushNotification.cancelLocalNotifications({ id: '' + this.lastId });
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }
}