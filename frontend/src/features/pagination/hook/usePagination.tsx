import React, { useState } from 'react'

export default function usePagination() {
    const [currentPage,setCurrentPage] = useState<number>(1)
    const [itemsPerPage,setItemsPerPage] = useState<number>(3)

    const lastIndex = itemsPerPage * currentPage
    const firstIndex = lastIndex - itemsPerPage

    return {
        firstIndex,
        lastIndex,
        itemsPerPage,
        setCurrentPage
    }
}
