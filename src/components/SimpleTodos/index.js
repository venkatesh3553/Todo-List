import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isTrue: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isTrue: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isTrue: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isTrue: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isTrue: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isTrue: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isTrue: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isTrue: false,
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, userInput: ''}

  onChangeInput = e => {
    this.setState({userInput: e.target.value})
  }

  deleteTodoList = id => {
    const {todoList} = this.state
    const filterTodoList = todoList.filter(each => each.id !== id)
    this.setState({todoList: filterTodoList})
  }

  saveTodo = task => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(item =>
        item.id === task.id ? task : item,
      ),
    }))
  }

  renderTodoInputField = () => {
    const {userInput} = this.state
    const onChangeHandler = event => {
      this.setState({userInput: event.target.value})
    }
    const onAddTodo = () => {
      if (userInput === '') return

      const newList = {id: uuid(), title: userInput}
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newList],
        userInput: '',
      }))
    }
    return (
      <div className="title-input-container">
        <input value={userInput} onChange={onChangeHandler} />
        <button className="add-btn" type="button" onClick={onAddTodo}>
          Add
        </button>
      </div>
    )
  }

  render() {
    const {todoList, count} = this.state

    return (
      <div className="todo-container">
        <h1>{count}</h1>
        <div className="card">
          <h1 className="tido-heading">Simple Todos</h1>

          {this.renderTodoInputField()}
          <ul className="ul-list">
            {todoList.map(eachItem => (
              <TodoItem
                initialTodosList={eachItem}
                key={eachItem.id}
                deleteTodoList={this.deleteTodoList}
                onChangeInput={this.onChangeInput}
                saveTodo={this.saveTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
