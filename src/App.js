import React from "react";

import BlogFeeds from "./Components/BlogFeeds";
import DocFeeds from "./Components/doctor/DocFeeds";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Products from "./Components/Products/Products";
// import Products from "./Components/Products/Products";
// import { StyledEngineProvider } from '@mui/material/styles';
import { commerce } from "./lib/commerce";
import { useState } from "react";
import { useEffect } from "react";
import TopNav from './Components/TopNav';
import BottomNav from './Components/BottomNav';
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/ChecoutForm/Checkout/Checkout";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }
    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }
    const handleUpdateQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
    };
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    };
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <TopNav></TopNav>
                <BottomNav totalItems={cart.total_items}></BottomNav>
                <Routes>
                    <Route exact path="/" element={<Banner />} />
                    <Route path="shop" element={<Products products={products} onAddToCart={handleAddToCart} />} />

                    <Route path="/doctor" element={<DocFeeds />} />
                    <Route path="/cart" element={<Cart cart={cart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
                    <Route path="/blogfeed" element={<BlogFeeds />} />
                    <Route path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
