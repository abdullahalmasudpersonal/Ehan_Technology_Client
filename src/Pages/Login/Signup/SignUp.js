import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    let errorElement;

    if (user) {
        navigate(from, { replace: true });
    }
    if (user) {
        navigate('/');
    }

    if (error) {
        errorElement =
            <p className='text-danger'>{error?.message} </p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('updated profile');
    }

    return (
        <div className='container'>
            <div className='signup'>
                <div className='signup-dev'>

                    <h3 className='fw-bold text-center mt-5'>Sign Up</h3>

                    <form onSubmit={handleRegister} className='register-form'>
                        <div className='register-input'>
                            <input className='mx-auto' type='text' placeholder='Enter name' name='name' required /> <br />
                            <input type='email' placeholder='Enter email' name='email' required /> <br />
                            <input type='password' placeholder='Enter password' name='password' required /> <br />
                            <input className='fw-bold signup-btn' type='submit' value='Sign Up' />
                        </div>
                    </form>
                    <p className='text-center'>{errorElement}</p>
                    <small className='text-center '><p className='mt-4'>
                        Alrady have an account? <span style={{ color: 'blue' }}><Link to='/login' className='text-decoration-none'>Login</Link>
                        </span></p></small>
                </div>
            </div>

        </div>
    );
};

export default SignUp;