import React from 'react'
import useForm from '../../hooks/useForm'

const TodoForm = ({handleAddTodo}) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if(description.trim().length <= 1) {
      return
    }
    
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h4>Add TO-DO</h4>
      <hr />
      <form onSubmit={ handleSubmit }>
        <input 
          className='form-control'
          type="text"
          name='description'
          placeholder='Descripción'
          autoComplete='off'
          value={ description }
          onChange={ handleInputChange }
        />
        <button 
          type='submit'
          className='btn btn-info mt-1 btn-block'
        >
          Add
        </button>
      </form>
    </>
  )
}

export default TodoForm