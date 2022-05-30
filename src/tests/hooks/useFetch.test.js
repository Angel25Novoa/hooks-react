import {renderHook} from '@testing-library/react-hooks'
import useFetch from '../../hooks/useFetch'

describe('Pruebas en useFetch', () => {
  test('debe de retornar la info por defecto', () => {
    const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    const {loading, data, error} = result.current
    expect(loading).toBe(true)
    expect(data).toBe(null)
    expect(error).toBe(null)
  })
  test('debe tener la info deseada', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    
    setTimeout(() => {
      waitForNextUpdate();
      const {loading, data, error} = result.current
      expect(data.lenght).toBe(1)
      expect(loading).toBe(false)
      expect(error).toBe(null)
    }, 3000)
  })
  test('debe de manejar un error', async() =>{
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'))
    await waitForNextUpdate();
    const {loading, data, error} = result.current
    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('No se pudo cargar la info')
  })
})