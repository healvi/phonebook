import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContactProvider } from "../context/ContactContext";
import {
  CreatePage,
  Details,
  EditPage,
  Favorite,
  Home,
  NotFound,
} from "../pages";
import PhoneBook from "../pages/PhoneBook";
const Routest = () => (
  <Router>
    <ContactProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PhoneBook />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
        {/* // <Route path="*" element={} /> */}
      </Routes>
    </ContactProvider>
  </Router>
);

export default Routest;
