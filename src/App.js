<<<<<<< HEAD
import React from "react";

import BlogFeeds from "./Components/Blog/BlogFeeds";
=======
import React, { useEffect, useState } from "react";
import BlogFeeds from "./Components/BlogFeeds";
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
import DocFeeds from "./Components/doctor/DocFeeds";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
<<<<<<< HEAD

import Products from "./Components/Products/Products";
// import Products from "./Components/Products/Products";
// import { StyledEngineProvider } from '@mui/material/styles';
import { commerce } from "./lib/commerce";
import { useState } from "react";
import { useEffect } from "react";

import BottomNav from "./Components/Navbar/BottomNav";
import Cart from "./Components/Cart/Cart";
=======
import BottomNav from './Components/BottomNav';
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
import Checkout from "./Components/ChecoutForm/Checkout/Checkout";
import DayCare from "./Components/Care/DayCare";
<<<<<<< HEAD
// import Footer from "./footer/Footer";
import FullArticle from "./Components/Blog/FullArticle";
import Footer from "./Components/footer/Footer";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };
    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    };
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
    };
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(
                checkoutTokenId,
                newOrder
            );

            setOrder(incomingOrder);

            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    };
=======
import Appointment from "./Components/Appointment/Appointment";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import ForgetPassword from "./Login/ForgetPassword/ForgetPassword";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import MyOrder from "./Components/Dashboard/MyOrder/MyOrder";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Login/AdminRoute/AdminRoute";
import AllAppointmet from "./Components/Dashboard/AllAppointment/AllAppointmetn";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import useCart from "./hooks/useCart";
import { addToDb } from "./utilities/fakeDb";


const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [displayProdcuts, setDisplayProducts] = useState([]);
>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, []);
    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }
    return (
        <div>
<<<<<<< HEAD
            <BrowserRouter>
                <BottomNav totalItems={cart.total_items}></BottomNav>
                <Routes>
                    <Route exact path="/" element={<Banner />} />
                    <Route
                        path="shop"
                        element={
                            <Products
                                products={products}
                                onAddToCart={handleAddToCart}
                            />
                        }
                    />
                    <Route path="/doctor" element={<DocFeeds />} />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cart={cart}
                                handleUpdateQuantity={handleUpdateQuantity}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleEmptyCart={handleEmptyCart}
                            />
                        }
                    />
                    <Route path="/blogfeed" element={<BlogFeeds />} />
                    <Route
                        path="/checkout"
                        element={
                            <Checkout
                                cart={cart}
                                order={order}
                                onCaptureCheckout={handleCaptureCheckout}
                                error={errorMessage}
                            />
                        }
                    />
                    <Route path="/blogfeed/:id" element={<FullArticle />} />
                    {/* <Route path="/adaptions" element={<FullArticle />} /> */}
                    <Route path="/daycare" element={<DayCare />} />
                </Routes>
                <Footer />
            </BrowserRouter>
=======
            <AuthProvider>
                <BrowserRouter>
                    <BottomNav cart={cart}></BottomNav>
                    <Routes>
                        <Route exact path="/" element={<Banner />} />
                        {/* <Route path="shop" element={<Products products={products} onAddToCart={handleAddToCart} />} /> */}
                        <Route path="shop" element={<Shop products={products} setProducts={setProducts} handleAddToCart={handleAddToCart} displayProdcuts={displayProdcuts} setDisplayProducts={setDisplayProducts} cart={cart} />} />
                        <Route path="/doctor" element={<DocFeeds />} />
                        {/* <Route path="/cart" element={<Cart cart={cart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} /> */}
                        <Route path="/blogfeed" element={<BlogFeeds />} />

                        <Route path="/orderReview/checkout" element={<Checkout cart={cart} />} />

                        <Route path="/daycare" element={<DayCare />} />
                        {/* <PrivateRoute path="/appointment" element={<Appointment />} /> */}
                        <Route
                            path="/appointment"
                            element={
                                <PrivateRoute>
                                    <Appointment />
                                </PrivateRoute>

                            }
                        />
                        <Route
                            exact
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>

                            }
                        >
                            <Route index element={<DashboardHome />} />
                            {/* <Route path="" element={<DashboardHome />} /> */}
                            <Route path="addDoctor" element={<AdminRoute>
                                <AddDoctor />
                            </AdminRoute>} />
                            <Route path="myorder" element={<MyOrder />} />
                            <Route path="makeAdmin" element={
                                <AdminRoute>
                                    <MakeAdmin />
                                </AdminRoute>
                            } />
                            <Route path="allAppointment" element={
                                <AdminRoute>
                                    <AllAppointmet />
                                </AdminRoute>
                            } />

                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/orderReview" element={<OrderReview />} />
                        <Route path="/forgetPassword" element={<ForgetPassword />} />
                        {/* <Route path="/resetPassword" element={<ResetPassword />} /> */}

                    </Routes>
                </BrowserRouter>
            </AuthProvider>

>>>>>>> ab578e10c1bbed51548ed0ec9fa1977015e28c1a
        </div>
    );
};

export default App;
