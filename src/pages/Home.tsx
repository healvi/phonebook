import React from "react";
import { BootmNav, Navbar } from "../components";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <BootmNav />
    </div>
  );
};

export default Home;
