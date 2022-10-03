import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css'
import '../images/res.jpeg';
import axios from 'axios';

type Props = {};

const Contact = (props: Props) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate('/');
  // };
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
  });
  const [subjectData, setSubject] = useState({
    subject: ''
  })

  const { fname, lname, email } = formData;
  const { subject } = subjectData;

  const [fieldError, setFieldError] = useState('');
  const [error, setError] = useState();

  const onDataChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubjectChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setSubject({ ...subjectData, [e.target.name]: e.target.value })
  //handle event on submit
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formValid = true;
    let emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fname === '') {
      formValid = false;
      setFieldError('Please enter first name')
    } else if (lname === '') {
      formValid = false;
      setFieldError('Please enter last name')
    } else if (email === '') {
      formValid = false;
      setFieldError('Please enter email');
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setFieldError('Please enter a valid email');
    } else if (subject === '') {
      formValid = false;
      setFieldError('Please enter subject')
    }
    else {
      formValid = true;
      setFieldError('');
    }

    if (formValid) {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let data = {
        fname: fname,
        lname: lname,
        email: email,
        subject: subject,
      };
      console.log(data)
      try {
        const response = await axios.post(
          'https://shielded-depths-40144.herokuapp.com/contact',
          data,
          config
        );
        console.log(response.data);
          
        //if response is successful, display alert and clear input fields
        alert("Email sent!");
       setFormData({fname : '', lname: '', email : ''})
       setSubject({subject : ''})


     
      } catch (err: any) {
        console.log(err);
        setError(err.response.data.errors || 'something went wrong');
      }
    }
  }


  return (
    <div className="page-style-hk">
      <div className="t-a">
        <h1 id="topics-hk">Contact Us</h1>
        <p><b>Send us your message and we will get back to you as soon as possible</b></p>
        <hr />
      </div>
      <div className="contact-form">
        <div className="contactrow-form">
          <div className="col-form">
            <img id="contact-img" src={require('../images/res.jpeg')} />
          </div>
          <div className="col-form">
            <form onSubmit={handleFormSubmit}>
              {fieldError && <p style={{ color: 'red' }}>{fieldError}</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <label>First Name</label>
              <input type="text"
                id="fname"
                name="fname"
                placeholder="Enter first name"
                onChange={(e) => onDataChange(e)}
                value={fname} />
              <label>Last Name</label>
              <input type="text"
                id="lname"
                name="lname"
                placeholder="Enter last name"
                onChange={(e) => onDataChange(e)}
                value={lname} />
              <label>Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => onDataChange(e)}
                value={email} />
              <label>Subject</label>
              <textarea
                id="email-subject"
                name="subject"
                placeholder="Write your message"
                onChange={(e) => handleSubjectChange(e)}
                value={subject} ></textarea>
              <button id="submit">Subscribe</button>
              {/* <input id="submit" type="submit" value="Submit" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
