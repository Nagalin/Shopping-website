import axios from '../../../lib/axios'
import { useEffect, useState } from 'react'

export default function useProfile() {
    const [profile,setProfile] = useState<object[]>([])

    useEffect(()=>{
        
        axios.get('/profile')
        .then(response=>{
            console.log(response.data)
            setProfile(response.data)
        })
    },[])

    return profile
} 