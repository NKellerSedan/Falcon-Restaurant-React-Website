import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';
import Food from "./Food";
import Search from "./Search";
import MenuFormForAdmin from "./AdminFoodForm";
import FoodForAdmin from "./AdminFood";
import FormContext from "../context/AdminFormContext";


type MenuType = {
  _id: string,
  food_id: string,
  food_name: string,
  price: string,
  description: string,
  category: string,
  active: string,
  image: string,
  quantity: number
  // onQuantityChange: (id: String, data: number) => void;
  UpdateMenuItem: (selectedFoodId: string) => void;
  deleteMenuItem: (selectedFoodId: string) => void;
};

export type foodForFormType = {
  _id: string,
  food_id: string,
  food_name: string,
  price: string,
  description: string,
  category: string,
  active: string,
  image: string,
  quantity: number
  //  onQuantityChange: (id: String, data: number) => void;
  //UpdateMenuItem: (selectedFoodId: String) => void;
};

type addFoodType = {
  food_id: string,
  food_name: string,
  price: string,
  description: string,
  category: string,
  active: string,
  image: string,
  quantity: number
  //  onQuantityChange: (id: String, data: number) => void;
  //UpdateMenuItem: (selectedFoodId: String) => void;
};

const MenuAPIForAdmin = () => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState<MenuType[]>([]);
  const [foodForForm, setFoodForForm] = useState<foodForFormType>({
    _id: "",
    food_id: "",
    food_name: "",
    price: "",
    description: "",
    category: "",
    active: "",
    image: "",
    quantity: 0

    //UpdateMenuItem: MUpdateMenuItem


    // function (selectedFoodId: String): void {
    //   throw new Error("Function not implemented.");}
  }
  );

  //const formMenu = useContext(FormContext) as unknown as foodForFormType

  const fr = useContext(FormContext)




  const MUpdateMenuItem = (foodId: string) => {
    console.log(foodId)
    getDataById(foodId)

  }

  const MdeleteMenuItem = (foodId: string) => {
    console.log("delete this food")
    console.log(foodId)
    // getDataById(foodId)
    sendDeleteRequest(foodId)

  }


  const MupdateFood = (id: string) => {
    console.log("update this data")
    console.log(fr.formData)
    sendPutRequest(id,fr.formData)
  }
  const McreateFood = (id: string) => {
    console.log("create this data")
    console.log(fr.formData)
    // sendPostRequest(fr.formData)

    let newData = {
      "food_id": fr.formData.food_id,
      "food_name": fr.formData.food_name,
      "price": fr.formData.price,
      "description": fr.formData.description,
      "category": fr.formData.category,
      "active": fr.formData.active,
      "image": fr.formData.image,
      "quantity": fr.formData.quantity

    }
    sendPostRequest(newData)
    sendGetRequest()
  }


  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/foods'
      );
      setFoods(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataById = async (id: string) => {
    try {
      const response = await axios.get(
        `https://shielded-depths-40144.herokuapp.com/foods/${id}`
      );
      // setFoodForForm(response.data);
      fr?.setMyData(response.data);
      console.log("data degisti mi")
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendDeleteRequest = async (id:string) => {
    try {
      const response = await axios.delete(
        `https://shielded-depths-40144.herokuapp.com/foods/${id}`
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPostRequest = async (data: addFoodType) => {
    try {
      const response = await axios.post(
        'https://shielded-depths-40144.herokuapp.com/foods',
        data
        // {
        //   food_id: '25',
        //   food_name: 'Tacos',
        //   price: '8.00',
        //   description: 'A crispy or soft corn or wheat tortilla that is folded or rolled and stuffed with a mixture.',
        //   category: 'Mains',
        //   active: 'Yes',
        //   image: 'Tacos.jpg'
        // }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPutRequest = async (foodid:string, data:addFoodType) => {
    try {
      const response = await axios.put(
        `https://shielded-depths-40144.herokuapp.com/foods/${foodid}`,
        data
        // {
        //   food_id: '25',
        //   food_name: 'Pasta',
        //   price: '10.00',
        //   description: 'Made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled.',
        //   category: 'Mains',
        //   active: 'Yes',
        //   image: 'NoPicAv.png'
        // }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // Search for food by name
  const filterMenu = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };

  useEffect(() => {
    fetch('https://shielded-depths-40144.herokuapp.com/foods')
      .then((response) => response.json())

      .then((responseData) => {
        setFoods(responseData);

        console.log(responseData);
      });

    axios.get('https://shielded-depths-40144.herokuapp.com/foods').then((response) => {
      setFoods(response.data);
      console.log(response);
    });
    sendGetRequest();
  }, []);

  return (
    <div className="container">
      {/* These will be in the admin page instead }
      <div className="center">
        <button onClick={sendPostRequest}>Add Food</button>
        <button onClick={sendPutRequest}>Update Food</button>
        <button onClick={sendDeleteRequest}>Delete Food</button>
      </div>      
      <br></br>*/}

      <MenuFormForAdmin updateFood={MupdateFood} createFood={McreateFood} />


      <Search filterMenu={filterMenu} />
      <h2>Starters</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Starters") ? <FoodForAdmin food_id={food.food_id} food_name={food.food_name} price={food.price} UpdateMenuItem={MUpdateMenuItem} deleteMenuItem={MdeleteMenuItem} key={food._id.toString()} description={food.description} category={food.category} active={food.active} image={food.image} quantity={food.quantity} /> : ""
          ))}
      </div>
      <h2>Mains</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Mains") ? <FoodForAdmin food_id={food.food_id} food_name={food.food_name} price={food.price} UpdateMenuItem={MUpdateMenuItem} deleteMenuItem={MdeleteMenuItem} key={food._id.toString()} description={food.description} category={food.category} active={food.active} image={food.image} quantity={food.quantity} /> : ""
          ))}
      </div>
      <h2>Curries</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Curries") ? <FoodForAdmin food_id={food.food_id} food_name={food.food_name} price={food.price} UpdateMenuItem={MUpdateMenuItem} deleteMenuItem={MdeleteMenuItem} key={food._id.toString()} description={food.description} category={food.category} active={food.active} image={food.image} quantity={food.quantity} /> : ""
          ))}
      </div>
      <h2>Desserts</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Desserts") ? <FoodForAdmin food_id={food.food_id} food_name={food.food_name} price={food.price} UpdateMenuItem={MUpdateMenuItem} deleteMenuItem={MdeleteMenuItem} key={food._id.toString()} description={food.description} category={food.category} active={food.active} image={food.image} quantity={food.quantity} /> : ""
          ))}
      </div>
      <h2>Beverages</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Beverages") ? <FoodForAdmin food_id={food.food_id} food_name={food.food_name} price={food.price} UpdateMenuItem={MUpdateMenuItem} deleteMenuItem={MdeleteMenuItem} key={food._id.toString()} description={food.description} category={food.category} active={food.active} image={food.image} quantity={food.quantity} /> : ""
          ))}
      </div>
    </div>

  );
};

export default MenuAPIForAdmin;