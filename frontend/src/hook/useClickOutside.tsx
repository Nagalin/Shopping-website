import React from 'react'


interface useClickOutsideProp {
    ref : React.RefObject<HTMLButtonElement>
    cb : () => void
}
export default function useClickOutside({ref,cb}:useClickOutsideProp) {
    
    const handleClickOutside = (e :any)=> {
        if(!ref.current?.contains(e.target)) {
            cb()
        }
    }
  window.addEventListener('click',handleClickOutside)
 
}
