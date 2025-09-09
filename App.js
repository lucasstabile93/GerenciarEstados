// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TaskProvider } from "./Components/TaskContext";
import { TaskListScreen } from "./Components/TaskListScreen";
import { CompletedTasksScreen } from "./Components/CompletedTasksScreen";
import { useResponsiveStyles } from "./Components/useResponsiveStyles";
import NotificationHandler from "./Components/NotificationHandler";
import { NotificationManager } from "./Components/NotificationManager";

export default function App() {
  const styles = useResponsiveStyles();
  const Stack = createStackNavigator();

  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tasks">          
          <Stack.Screen
            name="Tasks"
            component={TaskListScreen}
            options={{ title: "Tarefas", headerTitleStyle: styles.headerText, headerStyle: styles.headerContainer }}
          />
          <Stack.Screen
            name="Completed"
            component={CompletedTasksScreen}
            options={{ title: "Concluídas", headerTitleStyle: styles.headerText, headerStyle: styles.headerContainer }}
          />
          <Stack.Screen
            name="Notifications"
            component={NotificationManager}
            options={{ title: "Notificações", headerTitleStyle: styles.headerText, headerStyle: styles.headerContainer }}
          />
          <Stack.Screen
            name="NotificationsHandler"
            component={NotificationHandler}
            options={{ title: "Token de Notificação", headerTitleStyle: styles.headerText, headerStyle: styles.headerContainer }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
