import React, { useEffect } from 'react'
import { useReigsterContext } from '../context/useRegister'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const {
        name,
        lastName,
        email,
        phoneNumber,
        age,
        address,
        error,
        role,
        handleRegister
    } = useReigsterContext()

    return (

        <div className='d-flex  justify-content-center align-items-center' style={{ height: '100vh' }}>

            <form onSubmit={handleRegister} >

                {<div className="d-flex gap-3 flex-column" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#F7F7F7' }}>
                    <div className="display-4" >Register</div>
                    <input ref={name} placeholder='Enter your first name' data-testid='username-input' type="text" required className="form-control" style={{ width: '400px' }} />
                    <input ref={lastName} placeholder='Enter your last name' data-testid="password-input" required className="form-control" style={{ width: '400px' }} />
                    <input ref={email} data-testid="password-input" placeholder='Enter your e-mail' required className="form-control" style={{ width: '400px' }} />
                    <input ref={phoneNumber} data-testid="password-input" placeholder='Enter your phone number' required className="form-control" style={{ width: '400px' }} />
                    <input ref={age} data-testid="password-input" placeholder='Enter your age' required className="form-control" style={{ width: '400px' }} />
                    <input ref={address} data-testid="password-input" placeholder='Enter your address' required className="form-control" style={{ width: '400px' }} />
                    <select ref={role} className="form-control">
                        <option>Seller</option>
                        <option>Buyer</option>
                    </select>
                    <div onClick={() => navigate('/')} style={
                        {
                            cursor: 'pointer',

                        }}>
                        Already have an account? login here
                    </div>
                    <button className="btn btn-success mt-3 " style={{ fontSize: '1.3rem' }}>Register</button>
                    {error && <div data-testid='error' className="alert alert-danger">
                        {error}
                    </div>}

                </div>}
            </form>
        </div>
    )
}

