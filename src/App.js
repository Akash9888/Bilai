import React, { } from "react";

import BlogFeeds from "./Components/BlogFeeds";
import DocCard from "./Components/doctor/DocCard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Banner from "./Components/Banner/Banner";
const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Home></Home>
                <Routes>
                    <Route exact path="/" element={<Banner />} />
                    <Route path="/doctor" element={<DocCard />} />
                    <Route path="/blogfeed" element={<BlogFeeds />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
