import React from 'react'
import PropTypes from 'prop-types';
import './styles.css'

const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <li className='element'>
      <p
        onClick={() => handleToggle(todo.id)}
        className={todo.done ? 'done' : 'notDone'}
      >
        {index + 1 + ':'}{todo.name}
      </p>
      <button
        className='btn btn-danger'
        onClick={ () => handleDelete(todo.id) }
      >
        Delete
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func
}

export default TodoListItem