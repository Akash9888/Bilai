import React from "react";

import BlogFeeds from "./Components/BlogFeeds";
import DocFeeds from "./Components/doctor/DocFeeds";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Home></Home>
                <Routes>
                    <Route path="/doctor" element={<DocFeeds />} />
                    <Route path="/blogfeed" element={<BlogFeeds />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
