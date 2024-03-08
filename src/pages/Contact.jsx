import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { addDataInApi } from '../utils/api';

function Contact(props) {

  const [showSection, setShowSection] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    e.target.reset();

    if (!name || !email || !subject || !message) {
      return Swal.fire({
        icon: 'error',
        background: 'black',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
        cancelButtonColor: "gray",
        confirmButtonColor: "#00abe0",
      });
    }

    const userFormdata = {
      name,
      email,
      subject,
      message
    }

    addDataInApi("add-contact", userFormdata).then((response) => {

      if (response?.response?.data?.success == false) {
        return Swal.fire({
          icon: 'error',
          background: 'black',
          title: 'Error!',
          text: response?.response?.data?.message,
          showConfirmButton: true,
          cancelButtonColor: "gray",
          confirmButtonColor: "#00abe0",
        });
      }

      console.log("respossne", response);
      Swal.fire({
        icon: 'success',
        background: 'black',
        title: 'Added!',
        text: `${name}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    })
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  useEffect(() => {
    setShowSection(props.class)
  }, []);

  return (
    <>
      {/* Contact Section  */}
      <section id="contact" className={showSection}>
        <div className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Me</p>
            </div>

            <div className="row mt-2">

              <div className="col-md-6 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bi bi-geo-alt"></i>
                  <h3>My Address</h3>
                  <p>Alif, Street No.2 , Nehru Nagar, Near Amrepali Fatak, Rajkot-360001</p>
                </div>
              </div>

              <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bi bi-share"></i>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="https://twitter.com/MultaniAadil9" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.facebook.com/aadil.multani.3990?mibextid=9R9pXO" className="facebook"><i
                      className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/multani_sarkar/" className="instagram"><i
                      className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/multani-aadil-614946240/" className="linkedin"><i
                      className="bi bi-linkedin"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bi bi-envelope"></i>
                  <h3>Email Me</h3>
                  <p>aadilmultani646&#64;gmail.com</p>
                </div>
              </div>
              <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                  <i className="bx bi bi-telephone"></i>
                  <h3>Call Me</h3>
                  <p>+91 9662896738</p>
                </div>
              </div>
            </div>

            <form className="php-email-form mt-4" onSubmit={handleAdd}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control"
                    id="name" placeholder="Your Name*"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email"
                    id="email" placeholder="Your Email*"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject"
                  id="subject" placeholder="Subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5"
                  placeholder="Message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="text-center mt-4"><button type="submit">
                Send Message
              </button>
              </div>

            </form >

          </div >
        </div>
      </section >
      {/* End Contact Section  */}
    </>
  )
}

export default Contact;