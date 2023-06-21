import React, { useEffect, useRef, useState } from 'react'
import items from '../../../data/items.json'

interface NewItem {
    name : string
    id : string
    price : number
    imgUrl : string
}

interface EditProductProp {
    id : string
    toggle : ()=> void
}

export default function useEditProduct({id , toggle} : EditProductProp) {
    const [newItem,setNewItem] = useState<NewItem>({} as NewItem)
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        const i = items.find(item => item.id === id)
        if(i)  setNewItem(i)
    },[])

    const handleSumbit = ()=>{
        console.log(nameRef.current?.value)
        console.log(priceRef.current?.value)
        alert('Your item has been updated')
        toggle()
    }

    return {
        nameRef,
        priceRef,
        newItem,
        handleSumbit
    }
}
