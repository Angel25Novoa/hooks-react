import React from 'react'
import {mount} from 'enzyme'
import AppRouter from '../../../components/09-useContext/AppRouter'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en el componente AppRouter', () => {
  const user = {
    name: 'Jorge',
    email: '',
    id: 2
  }
  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <AppRouter />
    </UserContext.Provider>
    )
  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
})