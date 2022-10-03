import axios from 'axios';
import { useState } from 'react'
import '../styles/subscribe.css'

const Subscribe = () => {
    //const [email, setEmail] = useState('')
    // const [firstName, setFirstName] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
    });

    const { email, firstName } = formData;

    const [emailError, setEmailError] = useState('');
    const [fieldError, setFieldError] = useState('');
    const [error, setError] = useState();

    //update email value
    const onDataChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    //handle event on submit
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formValid = true;
        let emailPattern =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email === '') {
            formValid = false;
            setEmailError('Please enter email');
        } else if (!email.match(emailPattern)) {
            formValid = false;
            setEmailError('Please enter a valid email');
        } else if (firstName === '') {
            formValid = false;
            setFieldError('Please enter first name')
        }
        else {
            formValid = true;
            setEmailError('');
        }


        if (formValid) {
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            let data = {
                first_name: firstName,
                email: email,
            };

            try {
                const response = await axios.post(
                  'https://shielded-depths-40144.herokuapp.com/newsletter',
                  data,
                  config
                );
                console.log(response.data);

                //display alert is subsription is successful
              alert("You have successfully subscribed to our newsletter!")
              setFormData({firstName: '', email : ''})
             
              } catch (err: any) {
                console.log(err);
                setError(err.response.errors || 'something went wrong');
              }
        }
    }
    return (
        <div>
            <h1 id="topics-hk">
                Join to Get Updates from us!
            </h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form className="form-sub" onSubmit={handleFormSubmit}>


                <br />
                <label>First Name</label>
                <br />
                <input
                    name="firstName"
                    placeholder="Your firstname..."
                    type="text"
                    onChange={(e) => onDataChange(e)}
                    value={firstName}
                />
                {fieldError && <span style={{ color: 'red' }}>{fieldError}</span>}
                <br /><br />
                <label>Email</label>
                <br />
                <input
                    name="email"
                    placeholder="Your email address..."
                    type="text"
                    onChange={(e) => onDataChange(e)}
                    value={email}
                />
                {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                <br /><br /><br />
                <button>Subscribe</button>
                <br /><br />
                <br /><br />
            </form>
        </div>
    )
}
export default Subscribe