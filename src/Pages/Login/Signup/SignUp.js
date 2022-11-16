import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='container'>
            <div className='signup'>
                <div className='signup-dev'>

                    <h3 className='fw-bold text-center mt-5'>Sign Up</h3>

                    <form className='register-form'>
                        <div className='register-input'>
                            <input className='mx-auto' type='text' placeholder='Enter name' required /> <br />
                            <input type='email' placeholder='Enter email' required /> <br />
                            <input type='password' placeholder='Enter password' required /> <br />
                            <input className='fw-bold signup-btn' type='submit' value='Sign Up' />
                        </div>
                    </form>
                    <small className='text-center '><p className='mt-4'>
                        Alrady have an account? <span style={{color:'blue'}}>Sign in
                        </span></p></small>
                    {/*   <div className='d-flex justify-content-center align-items-center mt-3'>
                        <hr style={{ width: '40%', margin: 'auto',  }} />
                        <p>OR</p>
                        <hr style={{ width: '40%', margin: 'auto',  }} />
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default SignUp;