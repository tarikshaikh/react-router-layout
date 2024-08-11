import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./List";
import Layout from "./Layout";
import AddUser from "./AddUser";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/ListUsers" element={<List />} />
                    <Route path="/AddUser" element={<AddUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;