import { View, ScrollView } from 'react-native';
import { ToDo } from './src/types';
import ToDosContainer from './src/components/ToDosContainer' 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './src/styles'
import React from 'react';

const todos: ToDo[] = [
  {
    "id": "child-todo-001",
    "object_type": "todo",
    "title": "SECOND to do.",
    "parent_todo": "todo-001",
    "isDone": false
  },
  {
    "id": "child-todo-002",
    "object_type": "todo",
    "title": "THIRD to do.",
    "parent_todo": "todo-001",
    "isDone": false
  },
  {
    "id": "baby-todo-001",
    "object_type": "todo",
    "title": "FOURTH to do.",
    "parent_todo": "child-todo-001",
    "isDone": false
  },
  {
    "id": "todo-001",
    "object_type": "todo",
    "title": "Main To Do",
    "parent_todo": null,
    "isDone": false
  },
  {
    "id": "little-baby-todo-001",
    "object_type": "todo",
    "title": "FIFTH to do.",
    "parent_todo": "baby-todo-001",
    "isDone": false
  },
  {
    "id": "baby-todo-002",
    "object_type": "todo",
    "title": "SIXTH to do.",
    "parent_todo": "child-todo-001",
    "isDone": false
  },
  {
    "id": "baby-todo-003",
    "object_type": "todo",
    "title": "SEVENTH to do.",
    "parent_todo": "child-todo-001",
    "isDone": false
  },
  {
    "id": "baby-todo-004",
    "object_type": "todo",
    "title": "SEVENTH to do.",
    "parent_todo": "child-todo-002",
    "isDone": false
  },
  {
    "id": "baby-todo-005",
    "object_type": "todo",
    "title": "EIGTH TO DO",
    "parent_todo": "child-todo-002",
    "isDone": false
  },
  {
    "id": "baby-todo-006",
    "object_type": "todo",
    "title": "NINTH TO DO",
    "parent_todo": "child-todo-002",
    "isDone": false
  },
  {
    "id": "little-baby-todo-002",
    "object_type": "todo",
    "title": "TENTH TO DO",
    "parent_todo": "baby-todo-005",
    "isDone": false
  }
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ToDosContainer todos={todos}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
