import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  ProductList,
  ProductDetail,
  Contact,
  ContactIn,
  ContactEu,
  ContactUs,
  PageNotFound,
  Admin,
} from "../pages";

export const AllRoutes = () => {
  const user = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="eu" element={<ContactEu />} />
          <Route path="us" element={<ContactUs />} />
          <Route path="*" element={<Contact />} />
        </Route>
        <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
