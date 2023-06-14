import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReigsterContext } from '../context/useRegister'

export default function Form1() {
    
    useEffect(()=>{
        console.log(username)
    })
    const {
        username,
        setUsername,
        setPassword,
        setConfirmPassword,
        handleCheckUsername,
        error 
    }
        = useReigsterContext()

    const navigate = useNavigate()

    return (


        <div className='d-flex  justify-content-center align-items-center' style={{ height: '100vh' }}>


            <div className="d-flex gap-2 flex-column" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#F7F7F7' }}>
                <div className="display-4" >Register</div>
                <label className='form-label' style={{ fontSize: '1.5rem' }}>Username</label>
                <input onChange={(e)=>setUsername(e.target.value)} data-testid='username-input' type="text" required className="form-control" style={{ width: '400px', fontSize: '1.2rem' }} />
                <label className='form-label' style={{ fontSize: '1.5rem' }}>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} data-testid="password-input" type="password" required className="form-control" style={{ width: '400px', marginBottom: '20px' }} />
                <label className='form-label' style={{ fontSize: '1.5rem' }}>Confirm Password</label>
                <input  onChange={(e)=>setConfirmPassword(e.target.value)} data-testid="password-input" type="password" required className="form-control" style={{ width: '400px', marginBottom: '20px' }} />
                <div onClick={() => navigate('/')} style={
                    {
                        cursor: 'pointer',
                        marginTop: '-20px'

                    }}>
                    Already have an account? login here
                </div>
                <button onClick={handleCheckUsername} className="btn btn-success mt-3 " style={{ fontSize: '1.3rem' }}>Next</button>
                {error && <div data-testid='error' className="alert alert-danger">
                        {error}
                    </div>}

            </div>

        </div>

    )
}

