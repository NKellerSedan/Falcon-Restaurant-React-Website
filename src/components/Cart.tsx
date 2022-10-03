import { useState } from "react";
import CartItem from './CartItem';
import { CartItemType } from './MenuAPI';
import CheckoutForm from './CheckoutForm';

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: CartProps) => {

  type OrderProps = {
    email: string,
    name: string,
    phone: string,
    cart: string,
    total: string,
    date: string
  };
  
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const calculateTotal = (items: CartItemType[]) =>
  items.reduce((total: number, item) => total + item.quantity * item.price, 0);
  const totalVal = calculateTotal(cartItems).toFixed(2);
  localStorage.setItem("total", totalVal);
  
    // Add an order
      const handleAddOrder = (email: string, name: string, phone: string, cart: string, date: string) => {
        setOrders((prevState) => [
            ...prevState,
            { email: email, name: name, phone: phone, cart: cart, total: totalVal, date: date },
        ]);
    };

  return (
    <div className='cart-wrapper'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No food in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.food_id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <br />
      <h4>Total: ${totalVal}</h4>

      <CheckoutForm onAdd={handleAddOrder}  />
    </div>
  );
};


export default Cart;
