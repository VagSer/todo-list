import './style/App.css';
import {useState} from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [allTodos, setAllTodos] = useState([
    {id: 0, text: 'Купить хлеб', isDone: false},
    {id: 1, text: 'Сделать проект', isDone: false},
  ])

  return (
    <div>
      <header>
        <h3>ToDo App by VagSer</h3>
        <input
          placeholder='Введите дело'
          value={newTodo}
          onChange={(e) => {setNewTodo(e.target.value)}}
        />
        <button>
          Добавить
        </button>
      </header>
      <div>
        <ToDoList title='Список дел' todos={allTodos}/>
      </div>
    </div>
  );
}

export default App;
