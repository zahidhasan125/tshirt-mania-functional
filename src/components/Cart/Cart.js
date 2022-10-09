import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            {
                cart.map(item => <h3 key={item._id}>{item.name}
                <button onClick={()=>handleRemoveFromCart(item)}>X</button></h3>)
            }
        </div>
    );
};

export default Cart;