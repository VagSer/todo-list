import {useState, useEffect} from 'react';
import ToDoList from './components/ToDoList';
import MyHeader from './components/MyHeader';

function App() {
  const [newTodo, setNewTodo] = useState({
    id: Date.now(), text: '', isDone: false
  })
  const [allTodos, setAllTodos] = useState([

  ])

  const [whatShow, setWhatShow] = useState('all')
  const [appendedTodos, setAppendedTodos] = useState(allTodos)

  useEffect(() => {
    if (whatShow === 'all') setAppendedTodos(allTodos)
    else if (whatShow === 'done') {
      setAppendedTodos(allTodos.filter(todo => todo.isDone === true))
    } else setAppendedTodos(allTodos.filter(todo => todo.isDone === false))
  }, [allTodos, whatShow])

  const showTodos = (e) => {
    setWhatShow(e.target.value)
    if (e.target.value === 'all') setAppendedTodos(allTodos)
    else if (e.target.value === 'done') {
      setAppendedTodos(allTodos.filter(todo => todo.isDone === true))
    } else setAppendedTodos(allTodos.filter(todo => todo.isDone === false))
  }

  const makeDone = (value) => {
    value.isDone = !value.isDone
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

  const deleteAllDone = () => {
    setAllTodos(allTodos.filter(todo => todo.isDone === false))
  }

  const deleteAllTodos = () => {
    setAllTodos([])
  }

  return (
    <div className='App'>
      <MyHeader 
        newTodo={newTodo} 
        setNewTodo={setNewTodo} 
        addTodo={addTodo}
        whatShow={whatShow}
        showTodos={showTodos}
      />
      <ToDoList 
        title={appendedTodos.length? 'Список дел' : 'Дел нет'} 
        todos={appendedTodos} 
        removeTodo={removeTodo}
        makeDone={makeDone}
        deleteAllDone={deleteAllDone}
        deleteAllTodos={deleteAllTodos}
      />
    </div>
  );
}

export default App;
