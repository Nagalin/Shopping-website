
import { renderHook, act } from "@testing-library/react";
import useToggle from '../useToggle'

it('Test useToggle hook',()=>{
    const {result} = renderHook(()=>useToggle())
    expect(result.current.value).toBe(false)

    act(()=>{
        result.current.toggle()
    })

    expect(result.current.value).toBe(true)
})