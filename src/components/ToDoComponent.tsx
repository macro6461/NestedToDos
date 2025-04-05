import {View, Text, FlatList} from 'react-native'
import {styles} from '../styles'
import { ToDoProps } from '../types';

const ToDoComponent = ({ todo, toDoMap, isRoot, marginLeft = 0 }: ToDoProps) => {
  const children = toDoMap[todo.id]?.children || [];

  return (
    <View style={[styles.toDoContainer, { marginLeft }]}> 
        <Text style={isRoot ? styles.rootText : styles.toDoText}>
            {todo.id}
        </Text>
        <FlatList
            data={children}
            keyExtractor={(child) => child.id}
            renderItem={({ item }) => (
                <ToDoComponent todo={item} toDoMap={toDoMap} marginLeft={marginLeft + 15} />
            )}
        />
    </View>
  );
};


export default ToDoComponent;