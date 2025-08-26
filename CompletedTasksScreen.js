// CompletedTasksScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TaskContext } from './TaskContext';

export const CompletedTasksScreen = () => {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter(task => task.done);

  return (
    <View
      style={{ flex: 1, padding: 20 }}
      accessible={true}
    >
      <Text
        style={{ fontSize: 24, marginBottom: 20 }}
        accessibilityRole="header"
      >
        Tarefas Concluídas
      </Text>

      {completedTasks.length === 0 ? (
        <Text
          accessible={true}
          accessibilityLabel="Nenhuma tarefa concluída ainda."
        >
          Nenhuma tarefa concluída ainda.
        </Text>
      ) : (
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 15,
                marginBottom: 10,
                backgroundColor: '#a0e7a0',
                borderRadius: 5,
              }}
              accessible={true}
              accessibilityLabel={`Tarefa concluída: ${item.title}`}
              accessibilityRole="text"
            >
              <Text
                style={{ fontSize: 18, textDecorationLine: 'line-through' }}
              >
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
