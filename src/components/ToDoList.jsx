import ToDoItem from "./ToDoItem";


function ToDoList(props) {
    return (
      <div className="ToDoList">
        <h2>{props.title}</h2>
        {props.todos.map(todo => <ToDoItem key={todo.id} text={todo.text}/>)}
      </div>
    );
  }
  
  export default ToDoList;