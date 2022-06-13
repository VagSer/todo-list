import '../style/ToDoItem.css'
import '../style/buttons.css'
import {useState} from 'react'

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(props.todo.isDone)

    return (
      <div 
        className={(isDone === true)? "Item Done" : "Item"}
      >
        <p>
          <input
            type='checkbox'
            checked = {isDone}
            onChange = {(e) => {
              setIsDone(!isDone)
              props.makeDone(props.todo)
            }}
          />
          {props.todo.text}
        </p>
        <button
            className='DeleteButton'
            onClick={() => {
              props.delete(props.todo)
            }}
          >Удалить
        </button>
      </div>
    );
  }
  
  export default ToDoItem;