import {useState} from 'react';
import ToDoList from './components/ToDoList';
import MyHeader from './components/MyHeader';

function App() {
  const [newTodo, setNewTodo] = useState({
    id: Date.now(), text: '', isDone: false
  })
  const [allTodos, setAllTodos] = useState([
    {id: 0, text: 'Купить хлеб', isDone: false},
    {id: 1, text: 'Сделать проект', isDone: false},
    {id: 2, text: 'Сходить в душ', isDone: true}
  ])

  const addTodo = (e) => {
    if (newTodo.text) {
      setAllTodos([...allTodos, newTodo])
      setNewTodo({
        id: Date.now(), text: '', isDone: false
      })
    }
  }

  const removeTodo = (value) => {
    setAllTodos(allTodos.filter(todo => todo.id !== value.id))
  }

  return (
    <div className='App'>
      <MyHeader newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}/>
      <ToDoList title={allTodos.length? 'Список дел' : 'Дел нет'} todos={allTodos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
