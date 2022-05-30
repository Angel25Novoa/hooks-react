import React from 'react'
import {shallow, mount} from 'enzyme'
import TodoApp from '../../../components/08-useReducer/TodoApp'
// import TodoForm from '../../../components/08-useReducer/TodoForm'
import { demoState } from '../../fixtures/demoTodos'
import {act} from '@testing-library/react'

describe((`TodoApp tests`), () => {

  const wrapper = shallow(<TodoApp/>)
  Storage.prototype.setItem = jest.fn()

  test((`TodoApp component should render without errors`), () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should add a ToDo', () => {
    const wrapper = mount(<TodoApp/>)
    act(() => {
      wrapper.find('TodoForm').prop('handleAddTodo')(demoState[0])
      wrapper.find('TodoForm').prop('handleAddTodo')(demoState[1])
    })
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)')
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    expect(localStorage.setItem).toHaveBeenCalledWith('todos', JSON.stringify(demoState))
  })
  test('should delete a ToDo', () => {
    wrapper.find('TodoForm').prop('handleAddTodo')(demoState[0])
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (1)')
    wrapper.find('TodoList').prop('handleDelete')(demoState[0].id)
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)')
  })
})
