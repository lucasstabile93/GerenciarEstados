// NavigationBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const NavigationBar = ({ navigation }) => (
  <View style={styles.navBar}>
    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Tasks')}>
      <Text style={styles.navButtonText}>Tarefas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Completed')}>
      <Text style={styles.navButtonText}>Concluídas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Notifications')}>
      <Text style={styles.navButtonText}>Notificações</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('NotificationsHandler')}>
      <Text style={styles.navButtonText}>Token</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  navButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
