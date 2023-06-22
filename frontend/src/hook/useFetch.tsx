import React, { useEffect, useState } from 'react'
import axios from '../lib/axios'

interface Data {
    _id : string
    name : string
    price : number
    imageName : string
    
}
export default function useFetcher() {
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const [data,setData] = useState<Data[]>([])

    useEffect(()=>{
        axios.get('/product')
        .then(response =>{
           
            setData(response.data)
        }).catch(err=>console.log(err))
        .finally(()=> setIsLoading(false))
    },[])

    if(isLoading) return null
   
    return data

}