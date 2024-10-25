import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import './style.css';

const LoadingScreen = () => {
    const text = useRef(null);

    useEffect(() => {
        gsap.timeline()
            .to('.word', {
                y: 350,
                duration: 0.5,
                stagger: {
                    each: 0.05,
                }
            })
            .to('.splesh-screen', {
                y: -1000,
                duration: 0.8
            });
    }, []);

    return (
        <div className='vh-100 bg-white splesh-screen'>
            <div className='w-100 p-3 d-flex align-items-center justify-content-center flex-column position-relative' style={{ top: '-125px' }} ref={text}>
                <div className='d-flex word-container'>
                    {
                        `Welcome to my Portfolio`.split('').map((char, idx) => {
                            return char === ' '
                                ? <div className='word' key={idx}>&nbsp;</div>
                                : <div className='word' key={idx}>{char}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;