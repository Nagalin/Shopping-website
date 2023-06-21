import React, { FormEvent, useRef, useState } from 'react'
import axios from '../../../lib/axios'

export default function useAddProduct() {
    const name = useRef<HTMLInputElement>(null)
    const price = useRef<HTMLInputElement>(null)
    const [img,setImg] = useState<File>()

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        console.log(name.current?.value)
        console.log(price.current?.value)
        console.log(img)

        const formData = new FormData();
        formData.append('name', name.current?.value || '');
        formData.append('price', price.current?.value || '');
        formData.append('img', img || '');

       axios.post("add-product", formData)
       .then(response=>{
        console.log(response.status)
        alert('Your product have been updated')
    }).catch(err=>console.log(err))
          
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setImg(file)
      };

    return {
        name,
        price,
        handleSubmit,
        handleFileChange
    }
}
