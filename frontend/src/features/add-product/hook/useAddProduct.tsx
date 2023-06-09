import React, { useEffect, useRef, useState } from 'react'
import items from '../../../data/items.json'

interface NewItem {
    name : string
    id : number
    price : number
    imgUrl : string
}

interface AddProductProp {
    id : number
    toggle : ()=> void
}

export default function useAddProduct({id , toggle} : AddProductProp) {
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
