import React from 'react'
import useLogin from '../features/authentication/hook/useLogin'

export default function Login() {
    
    const {
        username,
        password,
        error,
        handleLogin
     } = useLogin()


    return (
        <div className='d-flex  justify-content-center align-items-center' style={{ height: '100vh' }}>
            <form onSubmit={handleLogin}>
                <div className="d-flex gap-2 flex-column" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#F7F7F7' }}>
                    <div className="display-4" >Login</div>
                    <label className='form-label' style={{ fontSize: '1.5rem' }}>Username</label>
                    <input data-testid='username-input' ref={username} type="text" required className="form-control" style={{ width: '400px', fontSize: '1.2rem' }} />
                    <label className='form-label' style={{ fontSize: '1.5rem' }}>Password</label>
                    <input data-testid="password-input"  ref={password} type="password" required className="form-control" style={{ width: '400px', marginBottom: '20px' }} />
                    <button className="btn btn-success" style={{ fontSize: '1.3rem' }}>Login</button>
                    <div data-testid='error'>{ error}</div>
                </div>
            </form>
        </div>
    )
}
