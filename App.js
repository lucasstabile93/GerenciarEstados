// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TaskProvider } from './TaskContext';
import { TaskListScreen } from './TaskListScreen';
import { CompletedTasksScreen } from './CompletedTasksScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tasks" component={TaskListScreen} />
          <Stack.Screen name="Completed" component={CompletedTasksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}