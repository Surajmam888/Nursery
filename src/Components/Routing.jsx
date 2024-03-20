import React from "react";
import SingleProducts from "../pages/SingleProducts/SingleProducts";
import { Route, Routes } from "react-router-dom";
import Allmodules from "../common/Allmodules";

import AddCart from "../pages/AddCart/AddCart";
import Cart from "../pages/AddCart/AddCart";
import PageNotFound from "../Error/PageNotFound";
import Products from "./Productsall/Products";

const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Allmodules />} />
      <Route path="/singleproducts/:productId" element={<SingleProducts />} />

       
        {/* <Route path="/addcart" element={} /> */}
      
        <Route path="/addCart" element={<Cart />} />
        <Route path="/pageNotFound" element={<PageNotFound />} />
        <Route path="/Products" element={<Products />} />
        
    
       
      </Routes>
    </>
  );
};

export default Routing;
