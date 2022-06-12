import '../style/ToDoItem.css'

function ToDoItem(props) {
    return (
      <div className="Item">
        <p>{props.text}</p>
        <button>Удалить</button>
      </div>
    );
  }
  
  export default ToDoItem;