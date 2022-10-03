import { NavLink, useParams } from 'react-router-dom';
import Calendar from 'react-calendar'
import React, { SetStateAction, useEffect, useState } from "react"
import '../styles/bookings.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

type Props = {
  time: string
}[];

type SlotProps = {
  date: string,
  time_slot: string,
  name: string,
  email: string,
  phoneno: string,
}[];
const Bookings = () => {
  let navigate = useNavigate()
  const [date, setDate] = useState(new Date())
  const [bookedSlot, setBookedSlot] = useState<SlotProps>([])
  const [timeSelected, setTimeSelected] = useState('12pm')
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneno: '',
  });

  const { fullname, email, phoneno } = formData;
  const [fieldError, setFieldError] = useState('');
  const [error, setError] = useState();

  //initialize time slots
  const [timeSlot, setTimeSlot] = useState<Props>([{
    time: "12pm"
  },
  {
    time: "2pm"
  },
  {
    time: "4pm"
  },
  {
    time: "6pm"
  },
  {
    time: "8pm"
  },
  {
    time: "10pm"
  },
  ])

 //get bookings from the database
  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/bookings'
      );
      setBookedSlot(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  //convert current date to day number
  var date2 = new Date(date.toDateString());
  var z = date2.getUTCDate()

  //filter the date chosen by the user from the dates in the database
  var result = bookedSlot.filter(slot => {
    var date1 = new Date(slot.date);
    var y = date1.getUTCDate()
    if (y === z) {
      return slot
    }
  })

  //update date when user clicks on the calender date
  const changedDate = (d: SetStateAction<Date>) => {
    setDate(d)
  }

  //update time slot selected by user
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeSelected(e.target.value)
  }

  const onDataChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  //navigate to thank you page after booking
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validate form
    let formValid = true;
    let emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (fullname === '') {
      formValid = false;
      setFieldError('Please enter Full Name');
    } else if (email === '') {
      formValid = false;
      setFieldError('Please enter email');
    } else if (phoneno === '') {
      formValid = false;
      setFieldError('Please enter phone number');
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setFieldError('Please enter a valid email');
    }
    else {
      formValid = true;
      setFieldError('');
    }


    //add booking to the database
    if (formValid) {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let data = {
        date: date.toDateString(),
        time_slot: timeSelected,
        name: fullname,
        email: email,
        phoneno: phoneno,
      }

      try {
        const response = await axios.post(
          'https://shielded-depths-40144.herokuapp.com/bookings',
          data,
          config
        );
        console.log(response.data);
        navigate("../thankyou", { replace: true });

      } catch (err: any) {
        console.log(err);
        setError(err.response.errors || 'something went wrong');
      }

    }
  }

  //get max and min date for calender view
  var myCurrentDate = new Date();
  var myFutureDate = new Date(myCurrentDate);
  myFutureDate.setDate(myFutureDate.getDate() + 14);
  useEffect(() => {

    sendGetRequest();
  }, []);
  return (
    <div className='container-info'>
      <h1 id="topics-hk">Reserve a seat today!</h1>
      <div className='row-info'>
        <div className='col-info'>

          <h2>Select date</h2>
          {/* display calender */}
          <Calendar
            onChange={changedDate}
            minDate={new Date()}
            maxDate={myFutureDate}
            value={date}
          />
          <p>Current selected date is <b>{date.toDateString()}</b></p>

          <div className='select-input'>
            <h2>Select time slot</h2>
            <label>Available Time slot</label> &nbsp; &nbsp;
            <select value={timeSelected} onChange={handleTimeChange}>
              {timeSlot.filter(p => !result.find(r => r.time_slot == p.time)).map(t =>
                <option className="dropdown-item" value={t.time}>{t.time}</option>
              )}
            </select>
            <p>You have selected {timeSelected}</p>
          </div>
        </div>

        {/* form to collect user booking details */}
        <div className='col-info'>
          <form id="form-info" onSubmit={handleSubmit}>

            <fieldset style={{ padding: "20px" }}>
              <legend>Your Info</legend>
              {fieldError && <p style={{ color: 'red' }}>{fieldError}</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <input type="hidden" className="form-control" id="date-info" value={date.toDateString()} />
              <input type="hidden" className="form-control" id="time-info" value={timeSelected} />

              <div className="form-group">
                <label>Name</label><br />
                <input
                  name="fullname"
                  className="form-control"
                  id="name-info"
                  placeholder="Enter name"
                  type="text"
                  onChange={(e) => onDataChange(e)}
                  value={fullname}
                />
              </div>
              <div className="form-group">
                <label>Email address</label><br />
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  id="email-info"
                  placeholder="Enter email"
                  onChange={(e) => onDataChange(e)}
                  value={email} />
              </div>
              <div className="form-group">
                <label>Phone number</label><br />
                <input
                  name="phoneno"
                  type="text"
                  className="form-control"
                  id="phoneno-info"
                  placeholder="Phone number"
                  onChange={(e) => onDataChange(e)}
                  value={phoneno} />
              </div>
              <br />
              <button type="submit" className="btn-info">Book now!</button>
            </fieldset>
          </form>
        </div>
      </div>
      <br /> <br /> <br /> <br />
    </div>
  );
};

export default Bookings;
