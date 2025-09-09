import React, { useContext } from 'react';
import { View, Text, FlatList, useWindowDimensions } from 'react-native';
import { TaskContext } from './TaskContext';
import { useResponsiveStyles } from './useResponsiveStyles';
import { NavigationBar } from './NavigationBar';

export const CompletedTasksScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);
  const styles = useResponsiveStyles();
  const { width } = useWindowDimensions();

  const isSmallScreen = width <= 600;
  const completedTasks = tasks.filter(task => task.done);
  const numColumns = isSmallScreen ? 1 : 2;

  return (
    <View style={styles.container} accessible={true}>
      <NavigationBar navigation={navigation} />
      <Text style={styles.headerText} accessibilityRole="header">
        Tarefas Concluídas
      </Text>
      
      {completedTasks.length === 0 ? (
        <Text accessible={true} accessibilityLabel="Nenhuma tarefa concluída ainda.">
          Nenhuma tarefa concluída ainda.
        </Text>
      ) : (
        <FlatList
          key={numColumns} 
          data={completedTasks}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          contentContainerStyle={
            isSmallScreen ? styles.listContainerSingleColumn : styles.listContainerTwoColumns
          }
          renderItem={({ item }) => (
            <View
              style={[
                styles.completedBackground,
                styles.taskItem,
                { width: isSmallScreen ? '100%' : '48%' },
              ]}
              accessible={true}
              accessibilityLabel={`Tarefa concluída: ${item.title}`}
              accessibilityRole="text"
            >
              <Text style={[styles.taskText, { textDecorationLine: 'line-through' }]}>
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
