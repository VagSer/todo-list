import {useState, useEffect} from 'react';
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

  const [whatShow, setWhatShow] = useState('all')
  const [appendedTodos, setAppendedTodos] = useState(allTodos)

  const showTodos = (e) => {
    setWhatShow(e.target.value)
    if (e.target.value === 'all') setAppendedTodos(allTodos)
    else if (e.target.value === 'done') {
      setAppendedTodos(allTodos.filter(todo => todo.isDone === true))
    } else setAppendedTodos(allTodos.filter(todo => todo.isDone === false))
  }

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
        <div style={{display:'flex'}}>
        <h4>Показать</h4>
        <select 
          value={whatShow}
          onChange={(e) => showTodos(e)}
        >
            <option value="all">Все</option>
            <option value="done">Сделанные</option>
            <option value="undone">Несделанные</option>
        </select>
      </div>
      <ToDoList title={allTodos.length? 'Список дел' : 'Дел нет'} todos={appendedTodos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
