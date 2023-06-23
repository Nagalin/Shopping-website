import React, { useEffect } from 'react';
import { Modal as BootstrapModal, Button, Form } from 'react-bootstrap';
import formatCurrency from '../../../utilites/formatCurrency';
import useEditProduct from '../hook/useEditProduct'

interface ModalProp {
    value: boolean
    name : string
    toggle: () => void
    id: string
    price : number
}

export default function Modal({ value, toggle, id , price,name }: ModalProp) {
    
   const {
    nameRef,
    priceRef,
    handleEdit,
   } = useEditProduct({id : id , toggle : toggle})

    return (
        <BootstrapModal show={value} onHide={toggle} >
            <BootstrapModal.Header >
                <BootstrapModal.Title>Edit your product</BootstrapModal.Title>
            </BootstrapModal.Header>

            <BootstrapModal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Product name</Form.Label>
                        <Form.Control  ref={nameRef}  placeholder={name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Product price</Form.Label>
                        <Form.Control ref={priceRef} placeholder={formatCurrency(price)}/>
                    </Form.Group>
                </Form>
            </BootstrapModal.Body>

            <BootstrapModal.Footer>
                <div className="d-flex gap-3" style={{

                }}>
                    <Button variant="secondary" onClick={toggle}>Close</Button>
                    <Button variant="primary" onClick={handleEdit}>Save changes</Button>
                </div>

            </BootstrapModal.Footer>
        </BootstrapModal>
    );
}
