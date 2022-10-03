import axios from 'axios';
import { useState } from 'react';
import React from 'react';
type FoodProps = {
  //food: {
    food_id: string,
    food_name: string,
    price: string,
    description: string,
    category: string,
    active: string,
    image: string,
    quantity: number
    //onQuantityChange: (id: String, data: number) => void;
    UpdateMenuItem: (selectedFoodId: string) => void;
    deleteMenuItem: (selectedFoodId: string) => void;
//  };
};




const FoodForAdmin = ({ food_id,food_name,price,UpdateMenuItem ,image,description,deleteMenuItem }: FoodProps,   ) => {

  //const [foodForForm, setFoodForForm] = useState<FoodProps[]>([]);
  // const UpdateMenuItem = (mydata : String) => {
  //  // console.log(mydata)
  //  food.UpdateMenuItem(mydata)
  // }

  // const sendGetRequest = async (foodId : String) => {
  //   try {
  //     const response = await axios.get(
  //       `https://shielded-depths-40144.herokuapp.com/foods/${foodId}`
  //     );
  //     setFoodForForm(response.data);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className='food-box'>
      <div className='food-img'>
        <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${image}`} alt={`${food_name}`} className="img-responsive img-curve" height="auto" width="150px" />
      </div>
      <div className='food-details'>
        <h4>{food_name}</h4>
        <p className="food-price">${price}</p>
        <p className="food-desc">{description}</p>

        {/* window.confirm('Are you sure you wish to delete this item?') ? onConfirm("confirm") : onCancel("cancel") */}
        {/* <button  className="btn btn-warning me-2" onClick={() => UpdateMenuItem(food_id)}   >Edit</button>
        <button  className="btn btn-danger" onClick={() => deleteMenuItem(food_id)}   >Delete</button> */}
          <button  className="btn btn-warning me-2" onClick={() => {  (window.confirm('Are you sure you wish to update this food?')) ? UpdateMenuItem(food_id) : console.log("process cancel") }}   >Edit</button>
        <button  className="btn btn-danger" onClick={() => {  (window.confirm('Are you sure you wish to delete this food?')) ? deleteMenuItem(food_id) : console.log("process cancel") }}   >Delete</button>
        {/* <button className='btn btn-danger' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteMenuItem(food_id) } } > Delete</button>
        <button className='btn btn-danger' onClick={() => {  (window.confirm('Are you sure you wish to delete this item?')) ? deleteMenuItem(food_id) : console.log("process cancel") } } > Delete</button> */}

        {/* <a href="" className="menu-btn" onClick={() => UpdateMenuItem(food.food_id)}>Update</a> */}
        
      </div>
    </div>
  );
};

export default FoodForAdmin;
