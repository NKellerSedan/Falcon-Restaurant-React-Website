import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css'

type Props = {};

const Gallery = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='page-style'>
      <div className='div-img'>
        <h1 id='topics-hk'>Gallery</h1>

        <p id='gallery-p'> These are our chefs that prepare our delicious menu!</p>
        <img id='gallery-img' src={require('../images/our-chefs.jpg')}></img>

        <br></br><br></br><br></br>
        <p id='gallery-p'> A view of our spacious kitchen our chefs use to prepare your meal!</p>
        <img id='gallery-img' src={require('../images/our-kitchen.jpg')}></img>

        <br></br><br></br><br></br>
        <p id='gallery-p'> Ask about dining on our beautiful outdoor patio!</p>
        <img id='gallery-img' src={require('../images/outdoor-patio-bar.jpg')}></img>

        <br></br><br></br><br></br>
        <p id='gallery-p'> Our staff are always delivering excellent service to all tables directly!</p>
        <img id='gallery-img' src={require('../images/restaurant-customer-service.jpg')}></img>
      </div>
      <br></br>
    </div>
  );
};

export default Gallery;
