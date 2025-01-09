import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    const handleLogout = () => {
        sessionStorage.removeItem('token eVoting Login');
        sessionStorage.removeItem('admin token eVoting');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">eVoting</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/adminlogin' ? 'active' : ''}`} aria-current="page" to="/adminlogin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/demo' ? 'active' : ''}`} to="/demo">Demo</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {!sessionStorage.getItem('token eVoting Login') && !sessionStorage.getItem('admin token eVoting') ? (
                                <>
                                    <Link to='/login' className="btn btn-primary mx-1" role="button">Login</Link>
                                    <Link to='/signup' className="btn btn-primary mx-1" role="button">Signup</Link>
                                </>
                            ) : (
                                <Link to='/' className='btn btn-danger' role='button' onClick={handleLogout}>Log Out</Link>
                            )}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
