import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthContext, { AuthContextType } from '../context/AuthContext';
//import '../styles/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
type Props = {}

const Register = (props: Props) => {

  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const [formData2, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData2;
  const [nameError, setnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pswdError, setpswdError] = useState('');
  const [cpswdError, setcpswdError] = useState('');
  const [error, setError] = useState();

  // const [emailFromForm, setEmail] = useState("");

  // const [passwordFromForm, setPassword] = useState("");

  // const handleChangeForEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   setEmail(e.target.value);
  // };

  // const handleChangeForPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   setPassword(e.target.value);
  // };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData2, [e.target.name]: e.target.value });


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formValid = true;
    let emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name === "") {
      formValid = false;
      setnameError('');
      setEmailError('');
      setpswdError('');
      setcpswdError('');
      setnameError('Please enter name');
    } else if (email === '') {
      setnameError('');
      setEmailError('');
      setpswdError('');
      setcpswdError('');
      formValid = false;
      setEmailError('Please enter email');
    } else if (!email.match(emailPattern)) {
      setnameError('');
      formValid = false;
      setEmailError('Please enter email in valid format');
    } else if (password === '') {
      formValid = false;
      setnameError('');
      setEmailError('');
      setpswdError('Please enter password');
    } else if (password.length < 5) {
      formValid = false;
      setnameError('');
      setEmailError('');
      setpswdError('Password should be more than 5 characters');
    } else if (password2 === '') {
      formValid = false;
      setnameError('');
      setEmailError('');
      setpswdError('');
      setcpswdError('Please enter confirm password');
    } else if (password2.length < 5) {
      formValid = false;
      setnameError('');
      setEmailError('');
      setpswdError('');
      setcpswdError('Password should be more than 5 characters');
    } else if (password2 !== password) {
      formValid = false;
      setnameError('');
      setEmailError('');
      setpswdError('');
      setcpswdError('Password and confirm password does not match');
    } else {
      formValid = true;
      setnameError('');
      setEmailError('');
      setpswdError('');
      setcpswdError('');
      console.log("pass it")
    }

    if (formValid) {


      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let data = {
        name: name,
        email: email,
        password: password,
      };
      try {
        const response = await axios.post(
          'https://shielded-depths-40144.herokuapp.com/registration',
          data,
          config
        );
        localStorage.setItem('email', data.email);
        localStorage.setItem('token', response.data.token);

        let decodeddata = decode(response.data.token);
        console.log(decodeddata);
        auth.login();
        navigate('/menu');
      } catch (e: any) {
        console.log('error ', e.message);
        setError(e.response.data.errors || 'Something went wrong');
      }
    }
  };

  // const sendPostRequest = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://shielded-depths-40144.herokuapp.com/registration',
  //       {
  //         email: emailFromForm,
  //         password: passwordFromForm
  //       }
  //     );

  //     console.log(response);
  //     if (response.status.toString() === "201") {
  //       console.log("you signup successfully")
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (


    <div  style={{ backgroundColor: '#e8e7e7' }} >

      <div className="container mt-5 mb-5 w-100    ">
        <div className="modal-lg  mx-auto  " >
          <div className="modal-lg-dialog  ">
            <div className="modal-content rounded-5 shadow text-center bg-light bg-opacity-25">
              <div className="modal-header  ">
                <h2 className="mx-auto my-auto mt-5 mb-4 display-2 ">Sign Up</h2>
              </div>
              <h4  className=" text-danger "> {error && <p >{error}</p>}  </h4>
              <div className="modal-body ">
                <form className="row justify-content-center " onSubmit={(e) => onSubmit(e)} noValidate>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control rounded-4" placeholder='Name'
                        name='name'
                        required
                        value={name}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="name">Name</label>
                      <div className="form-text text-danger"> {nameError && <p >{nameError}</p>} </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control rounded-4" placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="email">Email address</label>
                      <div className="form-text text-danger"> {emailError && <p >{emailError}</p>} </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control rounded-4" placeholder='Password'
                        name='password'

                        value={password}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="password">Password</label>
                      <div className="form-text text-danger">{pswdError && <p >{pswdError}</p>}</div>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="password" className="form-control rounded-4" placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={(e) => onChange(e)} />
                      <label htmlFor="password">Confirm Password</label>
                      <div className="form-text text-danger">  {cpswdError && <p >{cpswdError}</p>}</div>
                    </div>
                    <div className="col-9 mx-auto">
                    <button className="w-100 mb-2 p-3 btn btn-lg rounded-4 btn-primary rounded-pill" type="submit">Sign
                      up</button>
                      </div>
                    <div className="w-100"></div>
                    <small className="text-muted ">By clicking sign up, you agree to the terms of
                      use.</small>
                    <div className="modal-footer mt-4">
                      <h3 className="mx-auto my-auto " >Already have an account?</h3>
                      <div className="w-100"></div>
                      <div className="col-9 mx-auto">
                      <a className="w-100 p-3 mt-2 btn btn-lg rounded-4 btn-primary border  mb-5 rounded-pill" href="/login" role="button">Sign in</a>
                      </div>
                      <div className="w-100"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Register;