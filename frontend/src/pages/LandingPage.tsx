import React, { useState } from 'react'
import Login from '../component/Login'
import Register from '../component/Register'
export default function LandingPage() {
    const [mode,setMode] = useState<string>('login')
  return (
    <>
    {mode === 'login' && <Login setMode={mode =>setMode(mode)}/>}
    {mode === 'register' && <Register setMode={mode =>setMode(mode)}/>}
    </>
  )
}
