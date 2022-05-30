import {renderHook, act} from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm'

describe('Pruebas en useForm', () =>{
  const initialForm= {
    name: 'Jorge',
    email: 'jorge@example.com',
  }
  //useForm retorna un arreglo donde
  //el primer elemento son los valores del formulario
  //el segundo elemento es una funcion que se ejecuta cuando se cambia el valor de un input
  //el tercero elemento es una funcion que se ejecuta para resetear el formulario
  test('debe retornar un formulario por defecto', () => {

    const { result } = renderHook(() => useForm(initialForm))
    const [formValues, handleInputChange, reset] = result.current
    expect(formValues).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })
  test('debe cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Juan'
        }
      })
    })
    const [formValues] = result.current
    expect(formValues.name).toBe('Juan')
  })
  test('debe resetear el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Juan'
        }
      })
      reset()
    })
    const [formValues] = result.current
    expect(formValues).toEqual({
      name: 'Jorge',
      email: 'jorge@example.com',
    })
  })
})