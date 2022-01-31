import React from "react";
import TopNav from "./Components/TopNav";
import BottomNav from "./Components/BottomNav";
import BlogFeeds from "./Components/BlogFeeds";

const App = () => {
    return (
        <div>
            <TopNav></TopNav>
            <BottomNav />
            <BlogFeeds />
        </div>
    );
};

export default App;
