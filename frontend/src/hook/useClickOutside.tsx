import React from 'react'

interface useClickOutsideProp {
    ref : React.RefObject<HTMLButtonElement>
    cb : () => void
    value : boolean
}

export default function useClickOutside({ref, cb,value} : useClickOutsideProp) {
    const handleClickOutside = (e : any)=> {
        if(value && !ref.current?.contains(e.target)) cb()
    }
    
  window.addEventListener('click',handleClickOutside)
 
}
