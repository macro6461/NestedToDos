import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootToDoContainer: {
    padding: 16,
  },
  toDoContainer: {
    marginVertical: 4,
  },
  todo: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
  rootText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  toDoText: {
    fontSize: 16,
  },
});

export {styles}