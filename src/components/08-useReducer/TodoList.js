import React from 'react'
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem'
import './styles.css'

const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
    <ul>
      {
        todos.map((todo, index) => {
          return (
            <TodoListItem 
              key={todo.id}
              todo={todo} 
              index={index} 
              handleDelete={handleDelete} 
              handleToggle={handleToggle}
            />
          )
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func
}

export default TodoList