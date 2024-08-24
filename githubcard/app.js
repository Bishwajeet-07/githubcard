import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/Components/Navbar";
import Search from "./src/Components/Search";
import Card from "./src/Components/Card";

const AppLayout = () => {

    return (
        <div className="card">
            <Navbar />
            <Search />
        
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)