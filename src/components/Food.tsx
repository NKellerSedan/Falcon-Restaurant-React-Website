import { CartItemType } from './MenuAPI';

type FoodProps = {
  food: CartItemType;
  handleAddToCart: (clickedFood: CartItemType) => void;
};

const Food = ({ food, handleAddToCart }: FoodProps) => {
  return (
    <div className='food-box'>
      <div className='food-img'>
        <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${food.image}`} alt={`${food.food_name}`} className="img-responsive img-curve" height="auto" width="150px" />
      </div>
      <div className='food-details'>
        <h4><b>{food.food_name}</b></h4>
        <p className="food-price">${food.price}</p>
        <p className="food-desc">{food.description}</p>
        <button className="menu-btn" onClick={() => handleAddToCart(food)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Food;
