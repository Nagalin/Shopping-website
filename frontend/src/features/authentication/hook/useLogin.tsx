import React,{FormEvent, useRef,useState} from 'react'
import user from '../../../data/user.json'
import { useNavigate } from 'react-router-dom'
import axios from '../../../lib/axios'

export default function useLogin() {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [error,setError] = useState<string>('')
    const navigate = useNavigate()

    const handleLogin = (e: FormEvent<HTMLFormElement>): void =>{
        e.preventDefault()

        axios.post('http://localhost:8000/login',{
          username : username.current?.value,
          password : password.current?.value
        }).then(response =>{
          if(response.status === 200) {
            navigate('/homepage')
          }
        }).catch(err =>{
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
