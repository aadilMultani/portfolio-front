import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';
import CountUp from 'react-countup';

function About(props) {
    const [showSection, setShowSection] = useState('');
    const [userData, setUserData] = useState([]);
    const [skillData, setSkillData] = useState([]);

    const apiData = () => {
        fetchDataFromApi('about').then((res) => {
            setUserData(res.data.data);
        })

        fetchDataFromApi('get-skill').then((response) => {
            setSkillData(response.data.data)
        })
    }

    useEffect(() => {
        apiData();
        setShowSection(props.class);
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
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="public/img/bg.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>{userData[0]?.title} </h3>
                            <p className="fst-italic">
                                {userData[0]?.aboutMe}
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>Birthday:</strong> <span>{userData[0]?.detail[0]?.birthday}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>Website:</strong> <span>{userData[0]?.detail[0]?.Website}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>Phone:</strong> <span>{userData[0]?.detail[0]?.Phone}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>City:</strong> <span>{userData[0]?.detail[0]?.City}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>Age:</strong> <span>{userData[0]?.detail[0]?.Age}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>Degree:</strong> <span>{userData[0]?.detail[0]?.Degree}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>PhEmailone:</strong> <span>{userData[0]?.detail[0]?.PhEmailone}</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right"></i>
                                            <strong>Freelance:</strong> <span>{userData[0]?.detail[0]?.Freelance}</span>
                                        </li>
                                    </ul>
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
                                <CountUp start={0} end={232} />
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"></i>
                                <CountUp start={0} end={521} />
                                <p>Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-headset"></i>
                                <CountUp start={0} end={1463} />
                                <p>Hours Of Support</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-award"></i>
                                <CountUp start={0} end={24} />
                                <p>Awards</p>
                            </div>
                        </div>

                    </div>

                </div>
                {/* End Counts */}

                {/* Skills  */}
                <div className="skills container">

                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div className="row skills-content">

                        {skillData && skillData.map((item) => (
                            <div key={item._id} className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">{item.skillName} <i className="val">{item.expertise}%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${item.expertise}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Skills  */}

            </section>
            {/* End About Section */}
        </>
    )
}

export default About;