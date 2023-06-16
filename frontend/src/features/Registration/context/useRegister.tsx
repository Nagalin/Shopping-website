import axios from "../../../lib/axios"
import React, { useRef, useState } from "react"

interface RegisterContext {
    name : React.RefObject<HTMLInputElement>
    lastName : React.RefObject<HTMLInputElement>
    email : React.RefObject<HTMLInputElement>
    phoneNumber : React.RefObject<HTMLInputElement>
    age : React.RefObject<HTMLInputElement>
    address : React.RefObject<HTMLInputElement>
    error : string
    currentPage : number
    setCurrentPage : React.Dispatch<React.SetStateAction<number>>
    validateForm : ()=> void
    handleRegister : ()=> void
    setUsername : React.Dispatch<React.SetStateAction<string>>
    setPassword : React.Dispatch<React.SetStateAction<string>>
    setConfirmPassword : React.Dispatch<React.SetStateAction<string>>
}

interface RegisterContextProvider {
    children : React.ReactNode
}

const RegisterContext = React.createContext({} as RegisterContext)

export function useReigsterContext() {
    return React.useContext(RegisterContext)
}

export function RegisterContextProvider({children} : RegisterContextProvider) {
    const [error,setError] = useState<string>('')
    const [currentPage,setCurrentPage] = useState<number>(1)
    const [username,setUsername] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [confirmPassword,setConfirmPassword] = useState<string>('')
    const name = useRef<HTMLInputElement>(null)
    const lastName = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const phoneNumber = useRef<HTMLInputElement>(null)
    const age = useRef<HTMLInputElement>(null)
    const address = useRef<HTMLInputElement>(null)

    const validateForm = ()=>{
        
        if(password !== confirmPassword) return setError('Password must matched!!')

        axios.post('http://localhost:8000/checkUsername',{
            username : username
        }).then(response =>{
            if(response.status === 200) {
                
                setCurrentPage(2)
            }
        }).catch(err =>{
            console.error(err)
            setError('Username is already in used')
        })
    }

    const handleRegister = ()=>{
        axios.post('http://localhost:8000/register',{
            username : username,
            password : password,
            name : name.current?.value,
            lastName : lastName.current?.value,
            email : email.current?.value,
            phoneNumber : phoneNumber.current?.value,
            age : age.current?.value,
            address : address.current?.value
        })

    }

    return (
        <RegisterContext.Provider value={{
            setUsername,
            name,
            lastName,
            setCurrentPage,
            email,
            phoneNumber,
            age,
            address,
            validateForm,
            handleRegister,
            setConfirmPassword,
            setPassword,
            error,
            currentPage
        }}>
            {children}
        </RegisterContext.Provider>
    )
}