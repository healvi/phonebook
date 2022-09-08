import React from "react";
import { BootmNav, Navbar } from "../components";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <BootmNav />
    </>
  );
};

export default Home;
