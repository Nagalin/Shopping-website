import axios from '../../../lib/axios'
import React, { useEffect, useState } from 'react'

export default function useProfile() {
    const [profile,setProfile] = useState<object[]>([])

    useEffect(()=>{
        axios.get('http://localhost:8000/profile')
        .then(response=>{
            console.log(response.data)
            setProfile(response.data)
        })
    },[])

    return profile
} 