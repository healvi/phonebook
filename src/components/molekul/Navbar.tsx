/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { navbarstyle } from "../../styles";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <div css={navbarstyle}>
      <div className="nav-title">
        <p>PhoneBook</p>
        <p>298 Contact List</p>
      </div>
      <div className="nav-content">
        <img
          onClick={() => setOpen(!open)}
          src={require("../../assets/icons/search.svg").default}
          className="icon search-icon"
          alt="search-icon"
        />
        <img
          src={require("../../assets/icons/userplus.svg").default}
          className="icon addcontact-icon"
          alt="addcontact-icon"
        />
      </div>
      <div className={`search-container ${open ? "show" : "hidden"}`}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
