import { renderHook, act } from '@testing-library/react'
import useLocalStorage from '../useLocalStorage'

describe('Test useLocalStorage hook', () => {
  afterEach(() => {
    localStorage.clear()
  })

  test('should initialize with initial value if localStorage key is empty', () => {
    const key = 'testKey'
    const initialValue = 'initial value'

    const { result } = renderHook(() => useLocalStorage(key, initialValue))

    expect(result.current[0]).toBe(initialValue)
  })

  test('Should initialize with the value from localStorage if it exists', () => {
    const key = 'testKey'
    const initialValue = 'initial value'
    const storedValue = 'stored value'
    localStorage.setItem(key, JSON.stringify(storedValue))

    const { result } = renderHook(() => useLocalStorage(key, initialValue))

    expect(result.current[0]).toBe(storedValue)
  })

  test('Should update value and localStorage when setValue is called', () => {
    const key = 'testKey'
    const initialValue = 'initial value'
    const newValue = 'new value'

    const { result } = renderHook(() => useLocalStorage(key, initialValue))

    act(() => {
      result.current[1](newValue)
    })

    expect(result.current[0]).toBe(newValue)
    expect(JSON.parse(localStorage.getItem(key))).toBe(newValue)
  })
})
