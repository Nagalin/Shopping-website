import React, { useEffect,useState,useRef } from 'react';
import { Modal as BootstrapModal, Button, Form } from 'react-bootstrap';
import items from '../data/items.json'
import formatCurrency from '../utilites/formatCurrency';

interface ModalProp {
    value: boolean
    toggle: () => void
    id: number
}

interface NewItem {
    name : string
    id : number
    price : number
    imgUrl : string
}

export default function Modal({ value, toggle, id }: ModalProp) {
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
        toggle()
    }

    return (
        <BootstrapModal show={value} onHide={toggle} >
            <BootstrapModal.Header >
                <BootstrapModal.Title>Edit your product</BootstrapModal.Title>
            </BootstrapModal.Header>

            <BootstrapModal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product name</Form.Label>
                        <Form.Control  ref={nameRef}  placeholder={newItem.name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Product price</Form.Label>
                        <Form.Control ref={priceRef} placeholder={formatCurrency(newItem.price)}/>
                    </Form.Group>
                </Form>
            </BootstrapModal.Body>

            <BootstrapModal.Footer>
                <div className="d-flex gap-3" style={{

                }}>
                    <Button variant="secondary" onClick={toggle}>Close</Button>
                    <Button variant="primary" onClick={handleSumbit}>Save changes</Button>
                </div>

            </BootstrapModal.Footer>
        </BootstrapModal>
    );
}
