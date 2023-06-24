import axios from '../../../lib/axios'
import React, {  useRef } from 'react'
import Swl from 'sweetalert2'

interface EditProductProp {
    id : string
   
}

export default function useEditProduct({id } : EditProductProp) {
    
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)

    const handleEdit = ()=>{
        axios.put('/update',{
            id : id,
            newName : nameRef.current?.value,
            newPrice : priceRef.current?.value
        })
        .then(response=>{
            console.log(response.status)
            Swl.fire('Your product have been updated','','success')
            .then(()=> window.location.reload())
           
        }).catch(err=>console.error(err))
    }

    return {
        nameRef,
        priceRef,
        handleEdit
    }
}
