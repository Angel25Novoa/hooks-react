import React from 'react'
import {shallow} from 'enzyme'
import TodoForm from '../../../components/08-useReducer/TodoForm'

describe((`TodoForm component tests`), () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(<TodoForm handleAddTodo={handleAddTodo}/>)
  test((`TodoForm component should render without errors`), () => {
    expect(wrapper).toMatchSnapshot()
  })
  test((`TodoForm component should NOT call handleAddTodo on submit`), () => {
    const formSubmit = wrapper.find(`form`).prop(`onSubmit`)
    formSubmit({preventDefault: () => {}})
    wrapper.find(`form`).simulate(`submit`, {preventDefault: () => {}})
    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })
  test((`TodoForm component should call handleAddTodo on submit`), () => {
    const value = `A new todo`
    wrapper.find(`input`).prop(`onChange`)({target: {value, name: `description`}})
    const formSubmit = wrapper.find(`form`).prop(`onSubmit`)
    formSubmit({preventDefault: () => {}})
    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    })
  })
  test((`TodoForm component should reset the input value on submit`), () => {
    const value = `A new todo`
    wrapper.find(`input`).prop(`onChange`)({target: {value, name: `description`}})
    const formSubmit = wrapper.find(`form`).prop(`onSubmit`)
    formSubmit({preventDefault: () => {}})
    expect(wrapper.find(`input`).prop(`value`)).toBe(``)
  })
})