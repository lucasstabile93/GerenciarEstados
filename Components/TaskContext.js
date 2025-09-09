// TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Comprar leite', done: false },
    { id: 2, title: 'Estudar React Native', done: false },
  ]);

  const toggleTaskDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, toggleTaskDone }}>
      {children}
    </TaskContext.Provider>
  );
};
