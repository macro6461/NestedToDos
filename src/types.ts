// Data Structure
interface ToDo {
    id: string;
    object_type: string;
    title: string;
    parent_todo: string | null;
    isDone: boolean;
}

type ToDoMap = Record<string, {id: string, children?: ToDo[]}>;

interface ToDoProps {
    todo: ToDo;
    toDoMap: ToDoMap;
    isRoot?: boolean;
    marginLeft?: number;
  }
  

export {ToDo, ToDoMap, ToDoProps};
  