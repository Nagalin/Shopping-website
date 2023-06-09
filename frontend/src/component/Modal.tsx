import React, { useEffect,useState,useRef } from 'react';
import { Modal as BootstrapModal, Button, Form } from 'react-bootstrap';
import items from '../data/items.json'
import formatCurrency from '../utilites/formatCurrency';
import useAddProduct from '../features/add-product/hook/useAddProduct'
interface ModalProp {
    value: boolean
    toggle: () => void
    id: number
}



export default function Modal({ value, toggle, id }: ModalProp) {
   const {
    nameRef,
    priceRef,
    newItem,
    handleSumbit
   } = useAddProduct({id : id , toggle : toggle})

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
