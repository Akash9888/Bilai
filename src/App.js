import React from "react";

import BlogFeeds from "./Components/BlogFeeds";
import DocFeeds from "./Components/doctor/DocFeeds";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Banner from "./Components/Banner/Banner";
import DayCare from "./Components/Care/DayCare";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Home></Home>
                <Routes>
                    <Route exact path="/" element={<Banner />} />

                    <Route path="/doctor" element={<DocFeeds />} />

                    <Route path="/blogfeed" element={<BlogFeeds />} />
                    <Route path="/daycare" element={<DayCare />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
