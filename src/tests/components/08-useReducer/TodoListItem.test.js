import React from 'react'
import {shallow} from 'enzyme'  
import TodoListItem from '../../../components/08-useReducer/TodoListItem'
import {demoState} from '../../fixtures/demoTodos'

//usar demoTodos para testear

describe((`TodoListItem component tests`), () => {

  const handleDelete = jest.fn()
  const handleToggle = jest.fn()
  const todo = demoState[0]
  const wrapper = shallow(
    <TodoListItem 
      todo={todo}
      index={0}
      handleDelete = {handleDelete}
      handleToggle = {handleToggle}
    />)
  test(`TodoListItem component should render without errors`, () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('TodoListItem can call handleDelete', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(todo.id)
    //jest.fn()
    //const handleDelete = jest.fn()
    //toHaveBeenCalledWith
  })
  test('TodoListItem can call handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect(handleToggle).toHaveBeenCalledWith(todo.id)
    //jest.fn()
    //const handleDelete = jest.fn()
    //toHaveBeenCalledWith
  })
  test('Should render the todo', () => {
    expect(wrapper.find('p').text().trim()).toBe(`1:${todo.name}`)
  })
  test('Should toggle the todo', () => {
    const todoTest = {...todo, done: true}
    const wrapper = shallow(
      <TodoListItem 
        todo={todoTest}
        index={0}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
      />)
    wrapper.find('p').simulate('click')
    expect(wrapper.find('p').hasClass('done')).toBe(true)
  })
})