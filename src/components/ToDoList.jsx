import ToDoItem from "./ToDoItem";


function ToDoList(props) {
    return (
      <div className="ToDoList">
        <h2 style={{textAlign: 'center'}}>{props.title}</h2>
        {props.todos.map(todo => <ToDoItem key={todo.id} todo={todo} delete={props.removeTodo} makeDone={props.makeDone}/>)}
      </div>
    );
  }
  
  export default ToDoList;