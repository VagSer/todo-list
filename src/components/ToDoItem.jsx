import '../style/ToDoItem.css'
import {useState} from 'react'

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(props.todo.isDone)

    return (
      <div 
        className={(isDone === true)? "Item Done" : "Item"}
      >
        <p>{props.todo.text}</p>
        <button
            onClick={() => {
              props.delete(props.todo)
            }}
          >Удалить
        </button>
      </div>
    );
  }
  
  export default ToDoItem;