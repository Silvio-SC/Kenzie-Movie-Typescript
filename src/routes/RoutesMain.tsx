import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { InternalPage } from "../pages/Internal";

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/> 
            <Route path="/internalPage" element={<InternalPage/>}/> 
        </Routes>
    )
}