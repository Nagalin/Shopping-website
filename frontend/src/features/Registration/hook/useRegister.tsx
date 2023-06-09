import React, { FormEvent, useRef, useState } from 'react'

export default function useRegister() {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const confirmPassword = useRef<HTMLInputElement>(null)
    const [error,setError] = useState<string>('')
    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(password.current?.value !== confirmPassword.current?.value) {
            setError('Password must matched!!')
        }
    }

    return {
        username,
        password,
        confirmPassword,
        error,
        handleRegister
    }
}
