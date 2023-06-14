import React, { useEffect, useState } from 'react'
import Form1 from '../features/Registration/component/Form1'
import Form2 from '../features/Registration/component/Form2'
import { RegisterContextProvider, useReigsterContext } from '../features/Registration/context/useRegister'

export default function Register() {
  const {currentPage} = useReigsterContext()
  

  return (
    <>
    {currentPage === 1 && <Form1 />}
     {currentPage === 2 && <Form2  />}
    </>
  
  )
}
