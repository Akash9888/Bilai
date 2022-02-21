import React from "react";

import TopNav from "../TopNav";
import BottomNav from "../BottomNav";
import Footer from "./footer/Footer";
import AddProduct from "../Dashboard/AddProduct/AddProduct";

const Home = () => {
    return (
        <div>
            <TopNav></TopNav>
            <BottomNav />
            <AddProduct />
            <Footer />
        </div>
    );
};

export default Home;
