import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Details, Favorite, FormPage, Home } from "../pages";
import PhoneBook from "../pages/PhoneBook";
const Routest = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<PhoneBook />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
      <Route path="/details/:name" element={<Details />} />
      <Route path="/form/:name" element={<FormPage />} />
      {/* // <Route path="*" element={} /> */}
    </Routes>
  </Router>
);

export default Routest;
