import React from 'react'
import {mount} from 'enzyme'
import LoginScreen from '../../../components/09-useContext/LoginScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en el componente LoginScreen', () => {
  const setUser = jest.fn()
  const wrapper = mount( 
    <UserContext.Provider value={{setUser}}>
      <LoginScreen/>
    </UserContext.Provider>
  )
  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('debe ejecutar el setUser con el argumento esperado', () => {
    wrapper.find('button').simulate('click', {
      preventDefault: () => {},
      target: {
        name: 'login',
        value: 'login'
      }
    })
    expect(setUser).toHaveBeenCalledWith({
      name: 'Juan',
      email: '',
      id: 2
    })
  })
})