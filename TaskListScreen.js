// TaskListScreen.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { TaskContext } from './TaskContext';

export const TaskListScreen = () => {
  const { tasks, toggleTaskDone } = useContext(TaskContext);

  return (
    <View
      style={{ flex: 1, padding: 20 }}
      accessible={true}     
    >
      <Text
        style={{ fontSize: 24, marginBottom: 20 }}
        accessibilityRole="header"
      >
        Lista de Tarefas
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleTaskDone(item.id)}
            style={{
              padding: 15,
              marginBottom: 10,
              backgroundColor: item.done ? '#a0e7a0' : '#eee',
              borderRadius: 5,
            }}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel={`${item.title} ${item.done ? 'concluída' : 'não concluída'}`}
            accessibilityState={{ checked: item.done }}
          >
            <Text
              style={{
                fontSize: 18,
                textDecorationLine: item.done ? 'line-through' : 'none',
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
