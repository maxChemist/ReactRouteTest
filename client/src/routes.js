import React from "react";
import {Routes, Route, Navigate, Router, useNavigate} from 'react-router-dom'
import { LoginPage } from "./pages/LoginPage";
import { AdminPage } from "./pages/AdminPage";
import {UserPage} from './pages/UserPage'
import { ErrorPage } from "./pages/ErrorPage";
        
    export const useRoutes = (fullaccess,isAuthenticated)=>{
        // const navigate = useNavigate()        
        console.log("fullaccess:",fullaccess,"isAuthenticated:",isAuthenticated )
        
    return(    
        <Routes>
           <Route path="/" element ={<LoginPage/>} />
           <Route path="/admin" element ={<AdminPage/>} />
           <Route path="/user" element ={<UserPage/>}/>           
           <Route path="*" element={<ErrorPage/>} />
           </Routes> 
    )


}