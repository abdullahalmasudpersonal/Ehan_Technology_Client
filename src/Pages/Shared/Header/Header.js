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
               <Link to='/'> <a class="navbar-brand" >Mangrove</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
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