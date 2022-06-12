import './style/App.css';
import {useState} from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [newTodo, setNewTodo] = useState({
    id: Date.now(), text: '', isDone: false
  })
  const [allTodos, setAllTodos] = useState([
    {id: 0, text: 'Купить хлеб', isDone: false},
    {id: 1, text: 'Сделать проект', isDone: false},
    {id: 2, text: 'Сходить в душ', isDone: true}
  ])

  const addTodo = () => {
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
    <div>
      <header>
        <h3>ToDo App by VagSer</h3>
        <input
          placeholder='Введите дело'
          value={newTodo.text}
          onChange={(e) => {setNewTodo({...newTodo, text: e.target.value})}}
        />
        <button
          onClick={addTodo}
        >
          Добавить
        </button>
      </header>
      <ToDoList title='Список дел' todos={allTodos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
