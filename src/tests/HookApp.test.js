import React from 'react';
import '@testing-library/jest-dom'
import {shallow} from 'enzyme';
import HookApp from '../HookApp'

describe('Pruebas en el componente HookApp', () => {
  
  const wrapper = shallow(<HookApp />);

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })
}) 