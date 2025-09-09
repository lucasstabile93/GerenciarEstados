import React, { useEffect, useState } from 'react';
import { Text, View, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { NavigationBar } from './NavigationBar';
import { useResponsiveStyles } from './useResponsiveStyles';

export default function NotificationHandler({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState('');
  const styles = useResponsiveStyles();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  }, []);

  return (
    <View style={styles.container}>
        <NavigationBar navigation={navigation} />
        <Text>Expo Push Token:</Text>
        <Text selectable>{expoPushToken}</Text>
    </View>
  );
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Permissão para notificações não concedida!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Precisa de dispositivo físico para notificações push');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
