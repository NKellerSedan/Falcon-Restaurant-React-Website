import { CartItemType } from './MenuAPI';
import Button from '@mui/material/Button';

type CartItemProps = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: string) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: CartItemProps) => (
    <div className='cart-container'>
        <div className='cart-inner'>
            <h4>{item.food_name}</h4>
            <div className='cart-information'>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
            <div className='cart-buttons'>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => removeFromCart(item.food_id)}
                >
                    -
                </Button>
                <p>{item.quantity}</p>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => addToCart(item)}
                >
                    +
                </Button>
            </div>
        </div >
        <img className='cart-img' src={`https://shielded-depths-40144.herokuapp.com/assets/images/${item.image}`} alt={item.food_name} width='100px' />
    </div>
);

export default CartItem;