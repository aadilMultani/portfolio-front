import Typed from "typed.js";
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    const [showHeader, setShowHeader] = useState('');
    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    const el = useRef(null);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        if (location.pathname == '/') {
            setShowHeader(null)
        } else {
            setShowHeader(props.class);
        }

        const typed = new Typed(el.current, {
            strings: [
                "Mern Stack Developer",
                "Web Developer",
                "Web Designer",
                "Frontend Developer",
                "Backend Developer"
            ],
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    });

    return (
        <>
            <header id="header" className={showHeader}>
                <div className="container">

                    <h1 onClick={() => navigate('/')}>
                        <a style={{ cursor: 'pointer' }}>Aadil Multani</a>
                    </h1>

                    {/* <a className="mr-auto">
                        <img src="assets/img/logo.png" alt="" className="img-fluid" />
                    </a> */}

                    <h2>I'm a passionate <span ref={el}></span></h2>

                    <nav id="navbar" className={toggle ? 'navbar-mobile' : 'navbar'}>
                        <ul>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to={'/resume'}>Resume</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                    to={'/contact'}>Contact</NavLink>
                            </li>
                        </ul>
                        <i className={`${toggle ? 'bi bi-x' : 'bi bi-list'} mobile-nav-toggle`} onClick={handleToggle}></i>
                    </nav>

                    <div className="social-links">
                        <a href="https://twitter.com/MultaniAadil9" target="_blank" className="twitter">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://www.facebook.com/aadil.multani.3990?mibextid=9R9pXO" target="_blank" className="facebook">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/multani_sarkar/" target="_blank" className="instagram">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/multani-aadil-614946240/" target="_blank" className="linkedin">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;