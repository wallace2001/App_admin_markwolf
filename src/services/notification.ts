/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification);
    },

    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
});

export const CreateChannel = () => {
    PushNotification.createChannel(
        {
          channelId: '1',
          channelName: 'telphone',
        },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
};

export const LocalNotification = (user: string, message: string) => {
    PushNotification.localNotification({
        channelId: '1',
        title: user,
        message: message,
    });
};
