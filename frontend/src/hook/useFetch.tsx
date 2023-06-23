import  { useEffect, useState } from 'react'
import axios from '../lib/axios'

interface UseFetchProp {
    url : string
}
export default function useFetch({url} : UseFetchProp )  {
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(url)
        .then(response =>{ 
            console.log(response.data)  
            setData(response.data)
        }).catch(err=>console.log(err))
        .finally(()=> setIsLoading(false))
    },[])

    if(isLoading) return null
   
    return data

}