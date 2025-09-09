import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native';
import { TaskContext } from './TaskContext';
import { useResponsiveStyles } from './useResponsiveStyles';
import { NavigationBar } from './NavigationBar';

export const TaskListScreen = ({ navigation }) => {
  const { tasks, toggleTaskDone } = useContext(TaskContext);
  const styles = useResponsiveStyles();
  const { width } = useWindowDimensions();
  const isSmallScreen = width <= 600;
  const numColumns = isSmallScreen ? 1 : 2;

  return (
    <View style={styles.container}>
      <NavigationBar navigation={navigation} />
      <Text style={styles.headerText}>Lista de Tarefas</Text>


      <FlatList
        key={numColumns}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={isSmallScreen ? styles.listContainerSingleColumn : styles.listContainerTwoColumns}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleTaskDone(item.id)}
            style={[
              item.done ? styles.completedBackground : styles.pendingBackground,
              styles.taskItem,
              { width: isSmallScreen ? '100%' : '48%' },
            ]}
          >
            <Text style={[styles.taskText, { textDecorationLine: item.done ? 'line-through' : 'none' }]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
