import '../style/MyHeader.css'
import '../style/buttons.css'

function MyHeader(props) {
    return(
        <header className="MyHeader">
            <h3>ToDo App by VagSer</h3>
            <div style={{display:'flex'}}>
            <h4>Показать</h4>
                <select 
                value={props.whatShow}
                onChange={(e) => props.showTodos(e)}
                >
                    <option value="all">Все</option>
                    <option value="done">Сделанные</option>
                    <option value="undone">Несделанные</option>
                </select>
            </div>
            <div style={{display: 'flex'}}>
                <input
                placeholder='Введите дело'
                value={props.newTodo.text}
                onChange={(e) => {props.setNewTodo({...props.newTodo, text: e.target.value})}}
                />
                <button
                className='AddButton'
                onClick={props.addTodo}
                >
                Добавить
                </button>
            </div>
      </header>
    )
}

export default MyHeader