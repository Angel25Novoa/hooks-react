import todoReducer from '../../../components/08-useReducer/todoReducer'
import {demoState} from '../../fixtures/demoTodos'

describe('Pruebas en todoReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoState, {})
    expect(state).toEqual(demoState)
  })
  //Debe de agregar un nuevo todo
  test('debe de agregar un nuevo todo', () => {
    const newTodo = {id: 3, name: 'Hacer la limpieza', done: false}
    const state = todoReducer(demoState, {type: 'add',
      payload: newTodo})
    expect(state.length).toBe(3)
    expect(state).toEqual([...demoState, newTodo])
  })
  //Debe de eliminar un todo
  test('debe de eliminar un todo', () => {
    const state = todoReducer(demoState, {type: 'remove',
      payload: 1})
    expect(state.length).toBe(1)
    expect(state).toEqual([{id: 2, name: 'Hacer el trabajo', done: false}])
  })
  //Debe de marcar un todo como completado
  test('debe de marcar un todo como completado', () => {
    const state = todoReducer(demoState, {type: 'toggle',
      payload: 1})
    expect(state[0].done).toBe(true)
    expect(state[1]).toEqual(demoState[1])
  })
})