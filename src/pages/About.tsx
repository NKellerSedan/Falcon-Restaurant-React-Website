import React from 'react';

type Props = {};

const About = (props: Props) => {

  return (
    <div className='page-style-hk'>
      <h1 id="topics-hk">About Us</h1>
      <div className="center">
        <p><b>The Development Team</b></p>
        <br></br>
        <div className="persons">

          <div className='person'>
            <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Zafer Hakan Kalafat</p>
            <p id='description'>Team Lead</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Guray Demirezen</p>
            <p id='description'>Back-End Developer</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Vishnu Pillai</p>
            <p id='description'>Full Stack Developer</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Nicholas Keller-Sedan</p>
            <p id='description'>Front-End Developer</p>
          </div>

          <div className='person'>
          <img id='pic' src={require('../images/defaultpic.jpg')}></img>
            <p id='name'>Oreoluwa Lawal</p>
            <p id='description'>Front-End Developer</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
