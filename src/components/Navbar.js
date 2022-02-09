import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container" >
                    <Link to="/" className="navbar-logo" >
                        Dignity
                        <i classname="fa fa-envelope" />
                    </Link>
                    <div classname="menu-icon" onClick={handClick}>
                        <i classname={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul classname={click ? 'nav-menu active' : 'nav:menu'}>
                        <li classname='nav-item'>
                            <Link to='/' classname='nav-links' onClick={closeMobileMenu}> Home </Link>
                        </li>
                        <li classname='nav-item'>
                            <Link to='/products' classname='nav-links' onClick={closeMobileMenu}> Products </Link>
                        </li>
                        <li classname='nav-item'>
                            <Link to='/services' classname='nav-links' onClick={closeMobileMenu}> Services </Link>
                        </li>
                        <li classname='nav-item'>
                            <Link to='/sign-up' classname='nav-links' onClick={closeMobileMenu}> Sign Up </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;