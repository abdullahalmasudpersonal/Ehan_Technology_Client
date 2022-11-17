import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light">
               <Link to='/' style={{color:'gray'}}> <a class="navbar-brand fw-bold" >Mangrove</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/products' className='text-decoration-none'><a class="nav-link fw-bold">Product</a></Link>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link fw-bold">About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link fw-bold">Connect Us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link fw-bold">Blog</a>
                        </li>
                        <li class="nav-item active">
                         <Link to='/dashboard' className='text-decoration-none'><a class="nav-link fw-bold">Dashboard</a></Link>
                        </li>
                    </ul>
                    <div>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active fw-bold ">
                                <Link to='/signup' className='text-decoration-none'><a class="nav-link">New Coustomer </a></Link>
                            </li>
                            {
                                user ? <li class="nav-item active fw-bold">
                                <Link to='/login' className='text-decoration-none'><a onClick={handleSignOut} class="nav-link">Logout</a></Link>
                            </li>
                            :
                            <li class="nav-item active fw-bold">
                                <Link to='/login' className='text-decoration-none'><a class="nav-link">Log in </a></Link>
                            </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;