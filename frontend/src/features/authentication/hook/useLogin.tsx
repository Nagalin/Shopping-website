import React,{FormEvent, useRef,useState} from 'react'
import user from '../../../data/user.json'
import { useNavigate } from 'react-router-dom'

export default function useLogin() {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [error,setError] = useState<string>('')
    const navigate = useNavigate()

    const handleLogin = (e: FormEvent<HTMLFormElement>): void =>{
        e.preventDefault()

        const found = user.find(val=>{
          return username.current?.value === val.username && 
          password.current?.value === val.password
        })

        if(!found) setError('invalid username or password')
        else if(found.role === 'user') navigate('/homepage')
        else if(found.role === 'seller') navigate('/order')
        else if(found.role === 'admin') navigate('/admin')
         
    }

  return {
    username,
    password,
    error,
    handleLogin
  }
}
