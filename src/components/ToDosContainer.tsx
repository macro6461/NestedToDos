import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {ToDo, ToDoMap} from '../types';
import {styles} from '../styles';
import ToDoComponent from './ToDoComponent'

const ToDosContainer = ({ todos }: { todos: ToDo[] }) => {
  const [restructuredToDos, setRestructuredToDos] = useState<ToDoMap | {}>({});
  const [rootToDo, setRootToDo] = useState<ToDo | null>(null);

  useEffect(() => {
    cleanseParents(todos);
  }, []);

  const cleanseParents = (todos: ToDo[]) => {
    let structToDos = {...restructuredToDos};

    todos.forEach((todo: ToDo) => {
        if (!todo.parent_todo){ 
            setRootToDo(todo)
        } else {
            if (!structToDos[todo.parent_todo]){
                structToDos[todo.parent_todo] = {id: todo.parent_todo, children: [todo]}
            } else {
                structToDos[todo.parent_todo].children = [...structToDos[todo.parent_todo].children ?? [], todo]
            }
        }
      
    });
    
    setRestructuredToDos(structToDos);

  };

  return (
    <View style={styles.rootToDoContainer}>
      {rootToDo && <ToDoComponent todo={rootToDo} toDoMap={restructuredToDos} isRoot />}
    </View>
  );
};

export default ToDosContainer;