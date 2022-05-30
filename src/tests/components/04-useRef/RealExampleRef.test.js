import React from 'react'
import {shallow} from 'enzyme'
import RealExampleRef from '../../../components/04-useRef/RealExampRef'

describe('Pruebas en RealExampleRef', () => {
  //Debe mostrarse correctamente
  const wrapper = shallow(<RealExampleRef/>)
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
  })
  //Debe de mostrar la información
  test('Debe de mostrar la información', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
  })
})