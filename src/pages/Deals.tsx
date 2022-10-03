import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Deals.css'

type Props = {};

const Deals = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='page-style-hk'>
      <div className='div-img'>
        <h1 id="topics-hk">Deals & Promotions</h1>
        <img id='deals-img' src={require('../images/dealsAndPromotions.jpeg')}></img>
      </div>
    </div>
  );
};

export default Deals;
