import React, { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../lib/axios'

export default function useRegister() {
    const navigate = useNavigate()
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const confirmPassword = useRef<HTMLInputElement>(null)
    const [error,setError] = useState<string>('')

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(password.current?.value !== confirmPassword.current?.value) {
            setError('Password must matched!!')
            return
        }

        axios.post('http://localhost:8000/register',{
            username : username.current?.value,
            password : password.current?.value
        }).then(response =>{
            if(response.status === 200) {
                alert('Account created!!')
                navigate('/')
            }
        }).catch(err =>{
            setError(err.response.data.message)
        })
    }

    return {
        username,
        password,
        confirmPassword,
        error,
        handleRegister
    }
}
