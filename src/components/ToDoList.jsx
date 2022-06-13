import ToDoItem from "./ToDoItem";
import '../style/ToDoList.css'


function ToDoList(props) {
    return (
      <div className="ToDoList">
        <div style={{display: 'flex', justifyContent: "space-between", margin: '10px'}}>
          <button
            onClick={props.deleteAllDone}
          >Удалить сделанные
          </button>
          <h2 >{props.title}</h2>
          <button
            onClick={props.deleteAllTodos}
          >Удалить все</button>
        </div>
        {props.todos.map(todo => <ToDoItem key={todo.id} todo={todo} delete={props.removeTodo} makeDone={props.makeDone}/>)}
      </div>
    );
  }
  
  export default ToDoList;