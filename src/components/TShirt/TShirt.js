import React from 'react';
import './TShirt.css'

const TShirt = ({ product, handleAddToCart }) => {
    const {name, price, picture} = product;
    return (
        <div className='t-shirt'>
            <div className='t-shirt-img'>
                <img src={picture} alt="" />
            </div>
            <div>                
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                
            </div>
            <button
                className='add-to-cart'
                onClick={()=> handleAddToCart(product)}
            >Add To Cart</button>
        </div>
    );
};

export default TShirt;