// import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollTop";
import { Outlet } from "react-router-dom";

export default function StandarLayout() {
  return(
    <>
    <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
    
)  
}