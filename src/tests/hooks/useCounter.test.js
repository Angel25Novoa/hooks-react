import {renderHook, act} from '@testing-library/react-hooks'
import useCounter from '../../hooks/useCounter'

describe('Pruebas en el componente useCounter', () => {
  test('debe retornarvalores por defecto', () => {
    const {result} = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })
  test('debe incrementar el valor', () => {
    const {result} = renderHook(() => useCounter(100));
    const {increment} = result.current;
    act(() => {
      increment();
    })
    const {counter} = result.current;
    expect(counter).toBe(101)
  })
  test('debe decrementar el valor', () => {
    const {result} = renderHook(() => useCounter(100));
    const {decrement} = result.current;
    act(() => {
      decrement();
    })
    const {counter} = result.current;
    expect(counter).toBe(99)
  })
  test('debe resetear el valor', () => {
    const {result} = renderHook(() => useCounter(100));
    const {reset} = result.current;
    const {increment} = result.current;
    act(() => {
      increment()
      reset();
    })
    const {counter} = result.current;
    expect(counter).toBe(100)
  })
})