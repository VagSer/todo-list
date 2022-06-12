import ToDoItem from "./ToDoItem";


function ToDoList(props) {
    return (
      <div className="ToDoList">
        <h2>{props.title}</h2>
        {props.todos.map(todo => <ToDoItem key={todo.id} todo={todo} delete={props.removeTodo}/>)}
      </div>
    );
  }
  
  export default ToDoList;