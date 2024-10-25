import React, { useState, useEffect } from 'react'

function Resume(props) {

    const [showSection, setShowSection] = useState('');

    useEffect(() => {
        setShowSection(props.class)
    }, []);

    return (
        <>
            {/* Resume Section   */}
            <section id="resume" className={showSection}>
                <div className='resume'>
                    <div className="container">

                        <div className="section-title">
                            <h2>Resume</h2>
                            <p>Check My Resume</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="resume-title">Sumary</h3>
                                <div className="resume-item pb-0">
                                    <h4>Aadil Multani</h4>
                                    <p>
                                        As a MERN stack developer, I'm skilled in JavaScript for dynamic interfaces and have built
                                        user-friendly web apps with React. js and Angular. I create scalable server-side
                                        applications using
                                        Node. js and design efficient MongoDB databases.

                                    </p>
                                    <ul>
                                        <li>Rajkot, India</li>
                                        <li>+91 9662896738</li>
                                        <li>aadilmultani646&#64;gmail.com</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>Bachelor Of Computer Application</h4>
                                    <h5>2021 - Present</h5>
                                    <p>Saurashtra University Rajkot, Gujarat, INDIA.</p>
                                    <p>Saurashtra University is a public university in Rajkot, Gujarat, India. It was established on May
                                        23, 1967, and its campus covers 410 acres.</p>
                                </div>
                                <div className="resume-item">
                                    <h4>Higher Secondry</h4>
                                    <h5>2018 - 2019</h5>
                                    <p>Dream Internationals School Rajkot, Gujarat, INDIA.</p>
                                    <p>The Dream International School believes that people learn best in atmosphere of respect and
                                        caring. classNamees must be vibrant learning centres where the young fertile minds are secure and
                                        free to explore the limits of their unlimited potential.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    <h4>mern stack developer</h4>
                                    <h5>2022 - Present</h5>
                                    <p>Nrn Infotech, Rajkot Gujarat, INDIA </p>
                                    <ul>
                                        <li>Developed and maintained web application using Angular CLI.</li>
                                        <li>Developed and maintained web application using ionic Angular framework.</li>
                                        <li>Implement responsive web design using HTML5, CSS3, and Bootstrap framework.</li>
                                        <li>Integrated RESTful APIs and third-party service to fetch and display data.</li>
                                        <li>Conducted code reviews and provided constructive feedback to team members.</li>
                                        <li>Actively participating in agile/Scrum development processes, including daily stand-up
                                            meeting and sprint planning.</li>
                                        <li>Kept up-to-date with the latest Angular and web development trend, sharing knowledge with
                                            the team.</li>
                                        <li> Using Node.js and Express.js to develop the server-side logic of the application, handling
                                            HTTP requests and responses, and implementing business logic.
                                        </li>
                                        <li> Designing the database schema, interacting with MongoDB to store and retrieve data, and
                                            ensuring data consistency and integrity.</li>
                                        <li>Creating interactive and responsive user interfaces using React. Integrating the front-end
                                            with the back-end to ensure a seamless user experience.</li>
                                        <li>Building and maintaining APIs (Application Programming Interfaces) to facilitate
                                            communication between the front-end and back-end components of the application.</li>
                                        <li>Conducting tests to identify and fix bugs, ensuring the overall quality and reliability of
                                            the application.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Resume Section  */}
        </>
    )
}

export default Resume;