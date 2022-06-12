import '../style/MyHeader.css'

function MyHeader(props) {
    return(
        <header className="MyHeader">
            <h3>ToDo App by VagSer</h3>
        <div style={{display: 'flex'}}>
            <input
            placeholder='Введите дело'
            value={props.newTodo.text}
            onChange={(e) => {props.setNewTodo({...props.newTodo, text: e.target.value})}}
            />
            <button
            onClick={props.addTodo}
            >
            Добавить
            </button>
        </div>
      </header>
    )
}

export default MyHeader