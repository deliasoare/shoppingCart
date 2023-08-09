import { Link } from 'react-router-dom';
import { useContext } from 'react';

import DataContext from './DataContext';

const ShoppingCart = () => {
    const data = useContext(DataContext);
    const setData = data[1]; 
    let totalPrice = 0;
    data[0].shoppingCart.forEach(product => {
        totalPrice += Number(product.price) * Number(product.quantity);
    })
    return (
        <div className='shoppingCartContent'>
            <p className='cart'>Cart</p>
            <div className='cartContent'>
                {data[0].shoppingCart.length > 0 ?
                <div className="cartItemsContainer">
                    {data[0].shoppingCart.map(item => {
                        return (
                            <div className="cartItem">
                                <div className='cartItemImage'>
                                    <img src={item.image} />
                                </div>
                                <div className="cartItemInfo">
                                    <p className="cartItemTitle">{item.title}</p>
                                    <p className='cartItemPQ'>
                                        <p className="cartItemPrice">${item.price * item.quantity } ({item.quantity})</p>
                                        <div className='cartItemQuantity'>
                                            <div className="plusMinusQuantity">
                                                <div className='minusQuantity'>-</div>
                                                <input type='number' disabled min='1' value={item.quantity} className='quantity'></input>
                                                <div className='plusQuantity'>+</div>
                                            </div>
                                            <div className='deleteItem'>Delete</div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    <div className='totalPrice'>Total price: {totalPrice}</div>
                </div>  
                :
                <p className='emptyWarning'>
                    You don't currently have any products in your shopping cart. 
                    <Link className='emptyWarningLink' to='/items'>Click here</Link> 
                    to go ahead and buy some.
                </p>
            }
            </div>
        </div>

    );
}

export default ShoppingCart;