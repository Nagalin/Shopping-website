import React,{Dispatch, SetStateAction, useState} from 'react'

interface PaginationProviderProp {
    children : React.ReactNode
}

interface PaginationContext {
    firstIndex : number
    lastIndex : number
    itemsPerPage : number
    setCurrentPage : Dispatch<SetStateAction<number>>
}
const PaginationContext = React.createContext({} as PaginationContext)

export function usePagination () {
    return React.useContext(PaginationContext)
}

export function PaginationProvider ({children} : PaginationProviderProp ) {
    const [currentPage,setCurrentPage] = useState<number>(1)
    const [itemsPerPage] = useState<number>(2)
    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage
    
    return (
        <PaginationContext.Provider value={{
            firstIndex,
            lastIndex,
            itemsPerPage,
            setCurrentPage
            }}>
            {children}
        </PaginationContext.Provider>
    )
}