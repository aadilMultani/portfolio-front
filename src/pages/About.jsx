import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';
import CountUp from 'react-countup';
import Skeleton from 'react-loading-skeleton';
import CardSkeleton from '../component/CardSkeleton';
import Skill from './skill/Skill';
import aboutImage from '../assets/img/about_img_2.jpeg';

function About(props) {
    const [showSection, setShowSection] = useState('');
    const [userData, setUserData] = useState([]);
    const [skillData, setSkillData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const mailTo = userData[0]?.detail[0]?.PhEmailone;

    const apiData = () => {
        fetchDataFromApi('about').then((res) => {
            setUserData(res.data.About);
        })

        fetchDataFromApi('get-skill').then((response) => {
            setSkillData(response.data.Skill)
        })
    }

    useEffect(() => {
        apiData();
        setShowSection(props.class);

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {/* About Section  */}
            <section id="about" className={showSection} >

                <div className="about-me container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Learn more about me</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center align-items-center" data-aos="fade-right">
                            <img src={aboutImage} className="rounded-circle about-img" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>
                                {/* {userData[0]?.title || <Skeleton style={{ marginBottom: '.0.6rem' }} />} */}
                                MERN/MEAN STACK DEVELOPER
                            </h3>
                            <p>
                                {/* {userData[0]?.aboutMe || <Skeleton count={3} style={{ marginBottom: '.0.6rem' }} />} */}
                                Passionate and highly skilled Mern stack developer with 2 Year of experience in building dynamic and responsive web application. Seeking to contribute my expertise in frontend development to a forward-thinking company where I can make a meaningful impact.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    {!isLoading ? (
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Birthday:</strong>
                                                <span>
                                                    {/* {userData[0]?.detail[0]?.birthday} */}
                                                    18 Feb 2003
                                                </span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Website:</strong> <span>
                                                    <a target="_blank" style={{ color: 'white' }} href={`aadilmultani.netlify.app`}>
                                                        {/* {userData[0]?.detail[0]?.Website} */}
                                                        aadilmultani.netlify.app
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Phone:</strong>
                                                <span>
                                                    {/* {userData[0]?.detail[0]?.Phone} */}
                                                    9662896738
                                                </span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>City:</strong>
                                                <span>
                                                    {/* {userData[0]?.detail[0]?.City} */}
                                                    Rajkot, India
                                                </span>
                                            </li>
                                        </ul>
                                    ) : (
                                        <Skeleton count={4} style={{ marginBottom: '.0.6rem' }} />
                                    )}
                                </div>
                                <div className="col-lg-6">
                                    {!isLoading ? (
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Age:</strong>
                                                <span>
                                                    {/* {userData[0]?.detail[0]?.Age} */}
                                                    21
                                                </span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Degree:</strong>
                                                <span>
                                                    {/* {userData[0]?.detail[0]?.Degree} */}
                                                    Bachelor of Computer Application
                                                </span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>PhEmailone:</strong> <span>
                                                    <a style={{ color: 'white' }} href={`mailto:aadilmultani646@gmail.com`}>
                                                        {/* {mailTo} */}
                                                        aadilmultani646@gmail.com
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>
                                                <strong>Freelance:</strong>
                                                <span>
                                                    {/* {userData[0]?.detail[0]?.Freelance} */}
                                                    Available
                                                </span>
                                            </li>
                                        </ul>
                                    ) : (
                                        <Skeleton count={4} style={{ marginBottom: '.0.6rem' }} />
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ======= Counts ======= */}
                <div className="counts container">

                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile"></i>
                                <CountUp start={0} end={5} />
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"></i>
                                <CountUp start={0} end={8} />
                                <p>Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-headset"></i>
                                <CountUp start={0} end={521} />
                                <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-award"></i>
                                <CountUp start={0} end={3} />
                                <p>Awards</p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* End Counts */}

                {/* Skills  */}
                <Skill />

            </section>
            {/* End About Section */}
        </>
    )
}

export default About;