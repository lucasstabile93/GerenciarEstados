// NotificationManager.js
import React, { useEffect, useState } from "react";
import { View, Text, Button, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { NavigationBar } from './NavigationBar';
import { useResponsiveStyles } from './useResponsiveStyles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function NotificationManager({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(null);
  const styles = useResponsiveStyles();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationBar navigation={navigation} />

      <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Token Expo:</Text>
      <Text selectable style={{ fontSize: 12, marginBottom: 16 }}>
        {expoPushToken || "Gerando token..."}
      </Text>


      <Button
        title="Enviar notificação local"
        onPress={async () => {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: "Notificação de teste 🚀",
              body: "Essa é uma notificação local",
            },
            trigger: null,
          });
        }}
      />

      {notification && (
        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Última notificação recebida:</Text>
          <Text>{notification.request.content.title}</Text>
          <Text>{notification.request.content.body}</Text>
        </View>
      )}
    </View>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Permissão para notificações negada!");
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo push token:", token);
  } else {
    alert("É necessário usar um dispositivo físico para notificações!");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  return token;
}
