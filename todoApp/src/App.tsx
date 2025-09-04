import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  ToastAndroid,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Todo from './Components/Todo';
import Model from './Components/Model';
import TodoList from './Components/TodoList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [todoModel, setTodoModel] = useState(false);
  const [todos, setTodos] = useState([]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={style.parentContainer}>
        <Text style={style.title}></Text>
        {/** Add todo Button */}
        <View style={{ height: '15%' }}>
          <Pressable
            style={style.addTodoButton}
            onPress={() => setTodoModel(true)}
          >
            <View
              style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MaterialIcons name="add-task" size={30} color="#646464ff" />
              <Text style={style.buttonText}>Add Todo</Text>
            </View>
          </Pressable>
          {/** Seperator */}
          <View style={style.seperator}></View>
        </View>
        {/** Filter Tab */}
        <View style={{ height: '75%' }}>
          <Todo todos={todos} setTodos={setTodos} />
        </View>
      </View>
      {/** Model  */}
      <Model
        todoModel={todoModel}
        setTodoModel={setTodoModel}
        setTodos={setTodos}
      />
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#e1e7e7ff',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    paddingVertical: 10,
    textAlign: 'center',
  },
  addTodoButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#969696ff',
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#646464ff',
  },
  seperator: {
    height: 1,
    backgroundColor: '#aeaeaeff',
    marginVertical: 30,
  },
});
