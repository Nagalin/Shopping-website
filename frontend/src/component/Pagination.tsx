import React from 'react'
import { Container } from 'react-bootstrap'

interface PaginationProps {
    itemsPerPage: number
    totalItems: number
    changePage: (page : number) =>void
}

export default function Pagination({ itemsPerPage, totalItems,changePage }: PaginationProps) {
    let pagesNumber = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pagesNumber.push(i)
    }

    if(pagesNumber.length === 1) return null

    return (
        <Container className='mt-4'>
            <ul className='pagination'>
                {pagesNumber.map(page => {
                    return (
                        <li key={page} className="page-item" style={{cursor : 'pointer'}}>
                            <a onClick={()=>changePage(page)} 
                            className="page-link">{page}</a>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}
