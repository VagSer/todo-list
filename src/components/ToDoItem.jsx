import '../style/ToDoItem.css'

function ToDoItem(props) {
    return (
      <div className="Item">
        <p>{props.todo.text}</p>
        <button
          onClick={() => {props.delete(props.todo)}}
        >Удалить</button>
      </div>
    );
  }
  
  export default ToDoItem;