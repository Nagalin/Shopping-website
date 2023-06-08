import React, { useState } from 'react'

export default function useToggle() {
  const [value,setValue] = useState<boolean>(false)

 const toggle = ()=>setValue(currentValue=>!currentValue)
  return {
    value,
    setValue,
    toggle
  }
}
