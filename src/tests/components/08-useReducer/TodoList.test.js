import React from 'react'
import {shallow} from 'enzyme'
import TodoList from '../../../components/08-useReducer/TodoList'
import {demoState} from '../../fixtures/demoTodos'

describe((`TodoList component tests`), () => {
  const handleDelete = jest.fn() 
  const handleToggle = jest.fn()
  const wrapper = shallow(<TodoList 
    //Así pasamos los argumentos
    todos = {demoState}
    handleDelete = {handleDelete}
    handleToggle = {handleToggle}
  />)
  test((`TodoList component should render without errors`), () => {
    expect(wrapper).toMatchSnapshot()
  })
  test((`TodoList component should render a list of TodoListItem`), () => {
    expect(wrapper.find(`TodoListItem`).length).toBe(demoState.length)
    expect(wrapper.find(`TodoListItem`).at(0).prop(`handleDelete`)).toEqual(expect.any(Function))
  })
})