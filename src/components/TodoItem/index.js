// Write your code here
import './index.css'
const TodoItem = props => {
  const {initialTodosList, deleteTodoList} = props
  const {title, id} = initialTodosList

  const deleteTodo = () => {
    deleteTodoList(id)
  }

  return (
    <div>
      <div className="item-container">
        <li className="li-list">
          <p className="item-per">{title}</p>
          <div className="button-card">
            <button className="button" type="button" onClick={deleteTodo}>
              Delete
            </button>
          </div>
        </li>
      </div>
    </div>
  )
}
export default TodoItem
