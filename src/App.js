import React, { useEffect, useState } from "react";
import BlogFeeds from "./Components/Blog/BlogFeeds";
import DocFeeds from "./Components/doctor/DocFeeds";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
// import Products from "./Components/Products/Products";
import BottomNav from "./Components/Navbar/BottomNav";
import Cart from "./Components/Cart/Cart";
// import BottomNav from "./Components/BottomNav";
import Checkout from "./Components/ChecoutForm/Checkout/Checkout";
import DayCare from "./Components/Care/DayCare";
import FullArticle from "./Components/Blog/FullArticle";
// import Footer from "./Components/footer/Footer";
import Appointment from "./Components/Appointment/Appointment";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import ForgetPassword from "./Login/ForgetPassword/ForgetPassword";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
import MyOrder from "./Components/Dashboard/MyOrder/MyOrder";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Login/AdminRoute/AdminRoute";
import AllAppointmet from "./Components/Dashboard/AllAppointment/AllAppointmetn";
import Shop from "./Components/Shop/Shop";
import OrderReview from "./Components/OrderReview/OrderReview";
import useCart from "./hooks/useCart";
import { addToDb } from "./utilities/fakeDb";
import Footer from "./Components/footer/Footer";
import FourZeroFour from "./Components/ErorPage/FourZeroFour";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import AddBlog from "./Components/Dashboard/AddBlog/AddBlog";
import Success from "./Components/Success/Success";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [displayProdcuts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);
    const handleAddToCart = (product) => {
        const exists = cart.find((pd) => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter((pd) => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    };
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <BottomNav cart={cart}></BottomNav>
                    <Routes>
                        <Route exact path="/" element={<Banner />} />
                        {/* <Route path="shop" element={<Products products={products} onAddToCart={handleAddToCart} />} /> */}
                        <Route
                            path="shop"
                            element={
                                <Shop
                                    products={products}
                                    setProducts={setProducts}
                                    handleAddToCart={handleAddToCart}
                                    displayProdcuts={displayProdcuts}
                                    setDisplayProducts={setDisplayProducts}
                                    cart={cart}
                                />
                            }
                        />
                        <Route path="/doctor" element={<DocFeeds />} />
                        {/* <Route path="/cart" element={<Cart cart={cart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} /> */}
                        <Route path="/blogfeed" element={<BlogFeeds />} />

                        <Route
                            path="/orderReview/checkout"
                            element={
                                <PrivateRoute>
                                    <Checkout cart={cart} setCart={setCart} />
                                </PrivateRoute>
                            }
                        />

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
                            }>
                            <Route index element={<DashboardHome />} />
                            {/* <Route path="" element={<DashboardHome />} /> */}
                            <Route
                                path="addDoctor"
                                element={
                                    <AdminRoute>
                                        <AddDoctor />
                                    </AdminRoute>
                                }
                            />
                            <Route path="myorder" element={<MyOrder />} />
                            <Route
                                path="makeAdmin"
                                element={
                                    <AdminRoute>
                                        <MakeAdmin />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="addProduct"
                                element={
                                    <AdminRoute>
                                        <AddProduct />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="addBlog"
                                element={
                                    <AdminRoute>
                                        <AddBlog />
                                    </AdminRoute>
                                }
                            />
                            <Route
                                path="allAppointment"
                                element={
                                    <AdminRoute>
                                        <AllAppointmet />
                                    </AdminRoute>
                                }
                            />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/orderReview" element={<OrderReview />} />
                        <Route
                            path="/forgetPassword"
                            element={<ForgetPassword />}
                        />
                        {/* <Route path="/resetPassword" element={<ResetPassword />} /> */}
                        <Route path="/blogfeed" element={<BlogFeeds />} />
                        <Route path="/blogfeed/:id" element={<FullArticle />} />
                        <Route path="/daycare" element={<DayCare />} />
                        <Route path="/success" element={<Success />} />
                        <Route path="*" element={<FourZeroFour />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default App;
