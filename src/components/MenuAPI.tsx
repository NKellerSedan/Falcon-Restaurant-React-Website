import React, { useState, useEffect } from "react";
import axios from 'axios';
import Food from "./Food";
import Search from "./Search";
import Cart from './Cart';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Drawer from '@mui/material/Drawer';

export type CartItemType = {
  food_id: string;
  food_name: string;
  price: number;
  description: string;
  category: string;
  active: string;
  image: string;
  quantity: number;
};

type MenuType = {
  _id: string,
  food_id: string,
  food_name: string,
  price: number,
  description: string,
  category: string,
  active: string,
  image: string,
  quantity: number
  handleAddToCart: (clickedFood: CartItemType) => void;
};

const localCart = JSON.parse(localStorage.getItem('cart') || '[]');

const MenuAPI = () => {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState<MenuType[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState(localCart as CartItemType[]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  // Search for food by name
  const filterMenu = (name: string) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((total: number, item) => total + item.quantity, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCart(prev => {
      // Check if the food is already in the cart
      const isItemInCart = prev.find(item => item.food_id === clickedItem.food_id);

      if (isItemInCart) {
        return prev.map(item =>
          item.food_id === clickedItem.food_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // First time the food is added
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev =>
      prev.reduce((total, item) => {
        if (item.food_id === id) {
          if (item.quantity === 1) return total;
          return [...total, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...total, item];
        }
      }, [] as CartItemType[])
    );
  };


  return (
    <div>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cart}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <button className='cart-btn' onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cart)} color='error'>
          <AddShoppingCartIcon />
          Cart
        </Badge>
      </button>
      <Search filterMenu={filterMenu} />
      <h2>Starters</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Starters") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Mains</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Mains") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Curries</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Curries") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Desserts</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Desserts") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
      <h2>Beverages</h2>
      <div className="food-items">
        {foods.filter((f) => f.food_name.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            (food.category == "Beverages") ? <Food food={food} key={food._id.toString()} handleAddToCart={handleAddToCart} /> : ""
          ))}
      </div>
    </div>

  );
};

export default MenuAPI;