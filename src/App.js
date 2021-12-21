import React from "react";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ItemPage from "./components/ItemPage";
import Contacts from "./components/Contacts";
import AdminPage from "./components/AdminPage";

function App() {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Cards/>}/>
                <Route path={":itemId"} element={<ItemPage/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
                <Route path={"/admin"} element={<AdminPage/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

