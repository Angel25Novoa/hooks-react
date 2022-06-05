import React from 'react'
import {mount} from 'enzyme'
import HomeScreen from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('pruebas en el componente HomeScreen', () => {
  const user = {
    name: 'Jorge',
    email: 'mail@mail.com'
  }
  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <HomeScreen />
    </UserContext.Provider>
  )
  test('debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })
})