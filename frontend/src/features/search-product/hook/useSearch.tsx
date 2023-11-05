import React,{useState,useEffect} from 'react'
import axios from '../../../lib/axios'

interface Items {
  _id : string;
  name: string;
  price:number ;
  imageName : string
}

export default function useSearch(setItems: React.Dispatch<React.SetStateAction<Items[] | undefined>>) {
    const [searchField,setSearchField] = useState<string>('')
    const [didMounted,setDidMounted] = useState<boolean>(false)

    useEffect(() => {
      if(searchField === '' && !didMounted) {
        axios.get('/store')
        .then((response)=>{
          if(response.status === 200) {
            console.log(response.data)
            setItems(response.data)
            setDidMounted(true)
          }
        })
      }
        axios.get(`/search?searchField=${searchField}`)
        .then((response) => {
          if(response.status === 200) {
            console.log(response.data)
            setItems(response.data)
          }
        });
      }, [searchField]);

  return {
    setSearchField
}
}
