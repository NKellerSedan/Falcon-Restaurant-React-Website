import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './FooterNavigation';
import FAQ from './FAQ';
import Reviews from './Reviews';
import Deals from './Deals';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <div className='footer-dark'>
      <footer>
        <div>
          <div>
            <div className='footer-nav'>
              <Navigation />
              <Routes>
                <Route path='/faq' element={<FAQ />} />
                <Route path='/subscribe' element={<Subscribe />} />
              </Routes>
            </div>
          </div>
          <div className='group-box'>
              <h3>Group Members</h3>
              <ul>
                <li>
                  Zafer Hakan Kalafat
                </li>
                <li>
                  Guray Demirezen
                </li>
                <li>
                  Vishnu Pillai
                </li>
                <li>
                  Nicholas Keller-Sedan
                </li>
                <li>
                  Oreoluwa Lawal
                </li>
              </ul>
            </div>
          <p className='copyright'>Falcons ltd.© 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
