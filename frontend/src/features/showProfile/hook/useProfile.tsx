import React, { useEffect, useState } from 'react'
import data from '../../../data/profile.json'

export default function useProfile() {
    const [profile,setProfile] = useState<object[]>([])

    useEffect(()=>{
        setProfile(data)
    },[])

    return profile
}
