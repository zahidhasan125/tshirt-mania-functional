import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    const handleRemoveFromCart = product => {
        const remaining = cart.filter(pd => pd._id !== product._id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    products.map(product => <TShirt
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
    };

    export default Home;