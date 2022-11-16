import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import google from '../../../Assets/Img/social_media/google-logo3.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwrodRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || '/';
    let errorElement;

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwrodRef.current.value;

        await signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='container'>
        <div className='signup'>
            <div className='signup-dev'>

                <h3 className='fw-bold text-center mt-5'>Log In</h3>

                <form onSubmit={handleSubmit} className='register-form'>
                    <div className='register-input'>
                        <input type='email' placeholder='Enter email' ref={emailRef} required /> <br />
                        <input type='password' placeholder='Enter password' ref={passwrodRef} required /> <br />
                        <p className='text-end mb-2  reset-pass'><small>Reset password?</small></p>
                        <input className='fw-bold signup-btn mt-0' type='submit' value='Log In' />
                    </div>
                </form>

                <div className='d-flex justify-content-center align-items-center mt-3 px-2'>
                    <hr style={{ width: '40%', marginTop:'3px' }} />
                    <p className='mx-2'>OR</p>
                    <hr style={{ width: '40%', marginTop:'3px' }} />
                </div>

                <div className='social-login'>
                    <p className='text-center'><img width='35px' src={google} alt='google' />Continue With Google</p>
                </div>

                <small className='text-center '><p className='mt-4'>
                    Don't have an account? <span style={{color:'blue'}}><Link to='/signup' className='text-decoration-none'>Create new one
                    </Link> </span></p></small>
            </div>
        </div>

    </div>
    );
};

export default Login;