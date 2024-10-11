// Write your code here
import './index.css'
import {useState} from 'react'

const TodoItem = props => {
  const {initialTodosList, deleteTodoList, saveTodo} = props
  const {title, id} = initialTodosList

  const [isSaved, setIsSaved] = useState(true)
  const [newTitle, setNewTitle] = useState(title)

  const deleteTodo = () => {
    deleteTodoList(id)
  }

  const onEditClick = () => setIsSaved(false)

  const onChangeHandler = event => setNewTitle(event.target.value)

  const onSaveTodo = () => {
    setIsSaved(true)
    saveTodo({id, title: newTitle})
  }

  return (
    <div>
      <div className="item-container">
        <li className="li-list">
          {isSaved ? (
            <p className="title">{title}</p>
          ) : (
            <input
              className="title"
              value={newTitle}
              onChange={onChangeHandler}
            />
          )}
          {isSaved ? (
            <button
              type="button"
              className="delete-btn edit-btn"
              onClick={onEditClick}
            >
              Edit
            </button>
          ) : (
            <button
              type="button"
              className="delete-btn save-btn"
              onClick={onSaveTodo}
            >
              Save
            </button>
          )}
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
