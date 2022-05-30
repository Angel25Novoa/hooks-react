import React, {useEffect, useReducer} from 'react'
import todoReducer from './todoReducer'
import TodoForm from './TodoForm'

import './styles.css'
import TodoList from './TodoList'

const initialState = [{
  id: new Date().getTime(),
  desc: 'Learn Hooks',
  done: false
}]

const init = () => {
  return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {

  console.log(todoId)
    // crear la acción
    const removeAction = {
      type: 'remove',
      payload: todoId
    }
    //dispatch(action)
    dispatch(removeAction)
  }

  const handleToggle = (todoId) => {
    const toggleAction = {
      type: 'toggle',
      payload: todoId
    }
    dispatch(toggleAction)
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo
    })
  }

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoForm  
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoApp