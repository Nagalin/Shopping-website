import { Outlet, redirect } from "react-router-dom"
import react ,{useState,useEffect} from 'react'
import axios from '../../../lib/axios'
import { useNavigate } from "react-router-dom"
const Protected = ()=> {
    const navigate = useNavigate()
    const [permision,setPermision] = useState<boolean>(false)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('http://localhost:8000/checkauth')
        .then(response =>{
            if(response.status === 200) {
                setPermision(true)
            }
        }).catch(err => console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    })

    if(loading) return null
    if(permision) return <Outlet/>
    if(!loading && !permision) navigate('/')
}

export default Protected