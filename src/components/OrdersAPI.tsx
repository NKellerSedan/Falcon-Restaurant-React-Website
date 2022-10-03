import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import OrderTable from './OrderTable';
import AuthContext, { AuthContextType } from '../context/AuthContext';

type OrderListProps = {
    _id: string;
    email: string;
    name: string;
    phone: string;
    cart: string;
    total: string;
    date: string;
}

const OrdersAPI = () => {
    const [orderList, setOrderList] = useState<OrderListProps[]>([]);
    const auth = useContext(AuthContext) as AuthContextType;
    const email = localStorage.getItem('email');

    const sendGetRequest = async () => {
        try {
            const response = await axios.get(
                `https://shielded-depths-40144.herokuapp.com/orders/${email}`
            );
            setOrderList(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        sendGetRequest();
    }, []);

    // Display all orders to user
    return (
        <div className='page-style-hk'>
            <h1 id="topics-hk">Your Order History</h1>
            {auth.isLoggedIn ?
                <div className="order-table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Food</th>
                                <th>Total</th>
                                <th>Date</th>
                            </tr>
                        </tbody>
                        {orderList
                            .map((o) => (
                                <OrderTable
                                    name={o.name}
                                    phone={o.phone}
                                    cart={o.cart}
                                    total={o.total}
                                    date={o.date}
                                    key={o._id} />
                            ))}
                    </table>
                </div>
                :
                <div className="text-center">
                    You must be logged in to save and view order history.
                </div>
            }
        </div>
    );
};

export default OrdersAPI;