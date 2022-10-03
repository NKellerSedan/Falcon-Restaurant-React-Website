import React, { useState, useEffect, useContext, createContext } from "react";
import axios from 'axios';
import Food from "./Food";
import Search from "./Search";
import MenuFormForAdmin from "./AdminFoodForm";
import FoodForAdmin from "./AdminFood";
import FormContext from "../context/AdminFormContext";
import SearchForOrders from "./SearchForOrders";


type ordersType = {
  email: String,
  name: String,
  phone: String,
  cart: String,
  total: String,
  date: String,
};

// export type foodForFormType = {
//   _id: string,
//   food_id: string,
//   food_name: string,
//   price: string,
//   description: string,
//   category: string,
//   active: string,
//   image: string,
//   quantity: number
//   //  onQuantityChange: (id: String, data: number) => void;
//   //UpdateMenuItem: (selectedFoodId: String) => void;
// };

// type addFoodType = {
//   food_id: string,
//   food_name: string,
//   price: string,
//   description: string,
//   category: string,
//   active: string,
//   image: string,
//   quantity: number
//   //  onQuantityChange: (id: String, data: number) => void;
//   //UpdateMenuItem: (selectedFoodId: String) => void;
// };

const AdminOrdersAPI = () => {
  const [search, setSearch] = useState('');
  const [orders, setOrders] = useState<ordersType[]>([]);
  var rowId = 0
  // const [foodForForm, setFoodForForm] = useState<foodForFormType>({
  //   _id: "",
  //   food_id: "",
  //   food_name: "",
  //   price: "",
  //   description: "",
  //   category: "",
  //   active: "",
  //   image: "",
  //   quantity: 0

  //   //UpdateMenuItem: MUpdateMenuItem


  //   // function (selectedFoodId: String): void {
  //   //   throw new Error("Function not implemented.");}
  // }
  // );

  //const formMenu = useContext(FormContext) as unknown as foodForFormType

  // const fr = useContext(FormContext)




  // const MUpdateMenuItem = (foodId: string) => {
  //   console.log(foodId)
  //   getDataById(foodId)

  // }

  // const MdeleteMenuItem = (foodId: string) => {
  //   console.log("delete this food")
  //   console.log(foodId)
  //   // getDataById(foodId)
  //   sendDeleteRequest(foodId)

  // }


  // const MupdateFood = (id: string) => {
  //   console.log("update this data")
  //   console.log(fr.formData)
  //   sendPutRequest(id,fr.formData)
  // }
  // const McreateFood = (id: string) => {
  //   console.log("create this data")
  //   console.log(fr.formData)
  //   // sendPostRequest(fr.formData)

  //   let newData = {
  //     "food_id": fr.formData.food_id,
  //     "food_name": fr.formData.food_name,
  //     "price": fr.formData.price,
  //     "description": fr.formData.description,
  //     "category": fr.formData.category,
  //     "active": fr.formData.active,
  //     "image": fr.formData.image,
  //     "quantity": fr.formData.quantity

  //   }
  //   sendPostRequest(newData)
  //   sendGetRequest()
  // }


  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/orders'
      );
      setOrders(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // const getDataById = async (id: string) => {
  //   try {
  //     const response = await axios.get(
  //       `https://shielded-depths-40144.herokuapp.com/foods/${id}`
  //     );
  //     // setFoodForForm(response.data);
  //     fr?.setMyData(response.data);
  //     console.log("data degisti mi")
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const sendDeleteRequest = async (id:string) => {
  //   try {
  //     const response = await axios.delete(
  //       `https://shielded-depths-40144.herokuapp.com/foods/${id}`
  //     );

  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const sendPostRequest = async (data: addFoodType) => {
  //   try {
  //     const response = await axios.post(
  //       'https://shielded-depths-40144.herokuapp.com/foods',
  //       data
  //       // {
  //       //   food_id: '25',
  //       //   food_name: 'Tacos',
  //       //   price: '8.00',
  //       //   description: 'A crispy or soft corn or wheat tortilla that is folded or rolled and stuffed with a mixture.',
  //       //   category: 'Mains',
  //       //   active: 'Yes',
  //       //   image: 'Tacos.jpg'
  //       // }
  //     );

  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const sendPutRequest = async (foodid:string, data:addFoodType) => {
  //   try {
  //     const response = await axios.put(
  //       `https://shielded-depths-40144.herokuapp.com/foods/${foodid}`,
  //       data
  //       // {
  //       //   food_id: '25',
  //       //   food_name: 'Pasta',
  //       //   price: '10.00',
  //       //   description: 'Made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled.',
  //       //   category: 'Mains',
  //       //   active: 'Yes',
  //       //   image: 'NoPicAv.png'
  //       // }
  //     );

  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Search for food by name
  const filterMenu = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };

  useEffect(() => {
   

    axios.get('https://shielded-depths-40144.herokuapp.com/orders').then((response) => {
      setOrders(response.data);
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

      {/* <MenuFormForAdmin updateFood={MupdateFood} createFood={McreateFood} /> */}


      <SearchForOrders filterMenu={filterMenu} />
      <table className="table table-hover">
  <thead>
    <tr>
      <th style={{"width":"7%"}} scope="col">#</th>
      <th style={{"width":"20%"}} scope="col">email</th>
      <th scope="col">name</th>
      <th scope="col">phone</th>
      <th scope="col">cart</th>
      <th scope="col">total</th>
      <th scope="col">date</th>
    </tr>
  </thead>
  <tbody>
      
      
        {orders.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
          .map((order) => ( 
          <tr>
          <td  >{rowId +=1}</td>
          <td>{order.email}</td>
          <td>{order.name}</td>
          <td>{order.phone}</td>
          <td>{order.cart}</td>
          <td>{order.total}</td>
          <td>{order.date}</td>
          </tr>
            
          ))}
      
      </tbody>
</table>
     
    </div>

  );
};

export default AdminOrdersAPI;