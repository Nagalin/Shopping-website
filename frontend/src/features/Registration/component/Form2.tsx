import React, { useEffect } from 'react'
import { useReigsterContext } from '../context/useRegister'




export default function Register() {
    const {handleRegister} = useReigsterContext()
    
    return (

        <div className='d-flex  justify-content-center align-items-center' style={{ height: '100vh' }}>
            <button onClick={handleRegister}>click me</button>
            <form /* onSubmit={handleRegister} */ >

                {/* <div className="d-flex gap-2 flex-column" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#F7F7F7' }}>
                    <div className="display-4" >Register</div>
                    <label className='form-label' style={{ fontSize: '1.5rem' }}>Username</label>
                    <input ref={username} data-testid='username-input' type="text" required className="form-control" style={{ width: '400px', fontSize: '1.2rem' }} />
                    <label className='form-label' style={{ fontSize: '1.5rem' }}>Password</label>
                    <input ref={password} data-testid="password-input" type="password" required className="form-control" style={{ width: '400px', marginBottom: '20px' }} />
                    <label className='form-label' style={{ fontSize: '1.5rem' }}>Confirm Password</label>
                    <input ref={confirmPassword} data-testid="password-input" type="password" required className="form-control" style={{ width: '400px', marginBottom: '20px' }} />
                    <div  style={
                        {
                            cursor: 'pointer',
                            marginTop: '-20px'

                        }}>
                        Already have an account? login here
                    </div>
                    <button className="btn btn-success mt-3 " style={{ fontSize: '1.3rem' }}>Register</button>
                    {error && <div data-testid='error' className="alert alert-danger">
                        {error}
                    </div>}
                    
                </div> */}
            </form>
        </div>
    )
}

