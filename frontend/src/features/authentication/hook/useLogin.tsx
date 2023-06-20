import React,{FormEvent, useRef,useState} from 'react'

import { useNavigate } from 'react-router-dom'
import axios from '../../../lib/axios'

export default function useLogin() {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [error,setError] = useState<string>('')
    const navigate = useNavigate()

    const handleLogin = (e: FormEvent<HTMLFormElement>): void =>{
        e.preventDefault()

        axios.post('/login',{
          username : username.current?.value,
          password : password.current?.value
        }).then(response =>{
          if(response.status === 200) {
            localStorage.setItem('jwtToken',JSON.stringify(response.data.token))

            if(response.data.role === 'buyer') navigate('/homepage')
            if(response.data.role === 'seller') navigate('/my-store')
            
          }
        }).catch(err =>{
          console.error(err)
          setError(err.response.data.message)
        })
    }

  return {
    username,
    password,
    error,
    handleLogin
  }
}
