import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './style.css';
import AngularImg from '../../assets/img/Angular-png.png';
import ReactImg from '../../assets/img/reactjs-logo-removebg-preview.png';
import Nodejs from '../../assets/img/nodejs-logo-removebg-preview.png';
import JavaScript from '../../assets/img/JavaScript-logo.png';
import ExpressJs from '../../assets/img/expressJs-logo-removebg-preview.png';
import Mongodb from '../../assets/img/mongoDB-logo-removebg-preview.png';
import Nextjs from '../../assets/img/nextjs-removebg-preview.png';

const Skill = () => {
    const skillRef = useRef(null);
    const [activeDesc, setActiveDesc] = useState(null);

    useEffect(() => {
        // Initial animation function
        const initialAnimation = () => {
            gsap.fromTo(".hex-wrap,.hover-notify", { scale: 0 }, { scale: 1, stagger: 0.15 });
            gsap.fromTo(".hex-wrap", { opacity: 0 }, { opacity: 1, duration: 1 });
            // gsap.to(".hoverblock", { opacity: 0, delay: 3, duration: 0 });
        };

        // Function to handle animations when the section is in view
        const handleScrollAnimation = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initialAnimation();
                    observer.unobserve(entry.target);
                }
            });
        };

        // Create an Intersection Observer
        const observer = new IntersectionObserver(handleScrollAnimation, {
            threshold: 0.1
        });

        // Observe the skill section
        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
        };
    }, []);

    // Function to handle hover animations
    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 });
        const descName = e.currentTarget.className.split(' ')[1] + '-desc';
        gsap.to('.code-title', { x: 300, duration: 0.5 });
        gsap.to('.code-title', { x: 0, duration: 0.5 });
        setActiveDesc(descName);
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
        setActiveDesc(null);
    };

    return (
        <div className="skills container" ref={skillRef}>
            <div className="section-title">
                <h2>Skills</h2>
            </div>

            <div className="row skills-content">
                <div className="intro">
                    <div className="row">
                        <div className="intro-block">
                            <div className="col-md-6">
                                <div className="hex-master-wrap">
                                    <div className="grid-1">
                                        <div className="hex-wrap backend" data-title="BACKEND" onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}>
                                            <div className="hex-init"></div>
                                            <div className="hex-borders">
                                                <div className="border-1"></div>
                                                <div className="border-2"></div>
                                                <div className="border-3"></div>
                                            </div>
                                            <div className="label">
                                                <img src={AngularImg} />
                                            </div>
                                            <div className="hexagon">
                                                <div className="hex-inner-1">
                                                    <div className="hex-inner-2"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hex-wrap frontend" data-title="FRONTEND" onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave} >
                                            <div className="hex-init"></div>
                                            <div className="hex-borders">
                                                <div className="border-1"></div>
                                                <div className="border-2"></div>
                                                <div className="border-3"></div>
                                            </div>
                                            <div className="label">
                                                <img src={ReactImg} />
                                            </div>
                                            <div className="hexagon">
                                                <div className="hex-inner-1">
                                                    <div className="hex-inner-2"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid-2">
                                        <div className="hex-wrap html" data-title="HTML5" onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave} >
                                            <div className="hex-init"></div>
                                            <div className="hex-borders">
                                                <div className="border-1"></div>
                                                <div className="border-2"></div>
                                                <div className="border-3"></div>
                                            </div>
                                            <div className="label">
                                                <img src={Nodejs} />
                                            </div>
                                            <div className="hexagon">
                                                <div className="hex-inner-1">
                                                    <div className="hex-inner-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hex-wrap css" data-title="CSS3" onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave} >
                                            <div className="hex-init"></div>
                                            <div className="hex-borders">
                                                <div className="border-1"></div>
                                                <div className="border-2"></div>
                                                <div className="border-3"></div>
                                            </div>
                                            <div className="label">
                                                <img src={JavaScript} />
                                            </div>
                                            <div className="hexagon">
                                                <div className="hex-inner-1">
                                                    <div className="hex-inner-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hex-wrap jquery" data-title="JAVASCRIPT" onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave} >
                                            <div className="hex-init"></div>
                                            <div className="hex-borders">
                                                <div className="border-1"></div>
                                                <div className="border-2"></div>
                                                <div className="border-3"></div>
                                            </div>
                                            <div className="label">
                                                <img src={ExpressJs} />
                                            </div>
                                            <div className="hexagon">
                                                <div className="hex-inner-1">
                                                    <div className="hex-inner-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid-3">
                                        <div className="hex-wrap gui" data-title="USER INTERFACE" onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave} >
                                            <div className="hex-init"></div>
                                            <div className="hex-borders">
                                                <div className="border-1"></div>
                                                <div className="border-2"></div>
                                                <div className="border-3"></div>
                                            </div>
                                            <div className="label">
                                                <img src={Mongodb} />
                                            </div>
                                            <div className="hexagon">
                                                <div className="hex-inner-1">
                                                    <div className="hex-inner-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hex-wrap seo" data-title="SEO" onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave} >
                                            <div className="hex-init"></div>
                                            <div className="hex-borders">
                                                <div className="border-1"></div>
                                                <div className="border-2"></div>
                                                <div className="border-3"></div>
                                            </div>
                                            <div className="label">
                                                <img src={Nextjs} />
                                            </div>
                                            <div className="hexagon">
                                                <div className="hex-inner-1">
                                                    <div className="hex-inner-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="code-display">
                                    <div className="code-description">

                                        <div className={`backend-desc ${activeDesc === 'backend-desc' ? 'desc-active' : ''}`}>
                                            <p className="code-title">Angular</p>
                                            <div className="code-icon"></div>
                                        </div>

                                        <div className={`frontend-desc ${activeDesc === 'frontend-desc' ? 'desc-active' : ''}`}>
                                            <p className="code-title">ReactJS</p>
                                            <div className="code-icon"></div>
                                        </div>

                                        <div className={`html-desc ${activeDesc === 'html-desc' ? 'desc-active' : ''}`}>
                                            <p className="code-title">NodeJS</p>
                                            <div className="code-icon"></div>
                                        </div>

                                        <div className={`css-desc ${activeDesc === 'css-desc' ? 'desc-active' : ''}`}>
                                            <p className="code-title">Javascript</p>
                                            <div className="code-icon"></div>
                                        </div>

                                        <div className={`jquery-desc ${activeDesc === 'jquery-desc' ? 'desc-active' : ''}`}>
                                            <p className="code-title">ExpressJS</p>
                                            <div className="code-icon"></div>
                                        </div>

                                        <div className={`gui-desc ${activeDesc === 'gui-desc' ? 'desc-active' : ''}`}>
                                            <p className="code-title">MongoDB</p>
                                            <div className="code-icon"></div>
                                        </div>

                                        <div className={`seo-desc ${activeDesc === 'seo-desc' ? 'desc-active' : ''}`}>
                                            <p className="code-title">NextJS</p>
                                            <div className="code-icon"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill