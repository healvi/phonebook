/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { navbarstyle } from "../../styles";
import { useNavigate } from "react-router-dom";
import { GET_CONTACTS } from "../../hooks/useGetContact";
import { useLazyQuery } from "@apollo/client";
import useContact from "../../context/ContactContext";
const Navbar = () => {
  const navigate = useNavigate();
  const [searchContact, { loading, error, data }] = useLazyQuery(GET_CONTACTS);
  const { AddToContact } = useContact();
  const [open, setOpen] = useState(false);
  const setSearch = (e: String) => {
    let names = e.split(" ");
    searchContact({
      variables: {
        where: {
          first_name: { _ilike: `%${names[0]}%` },
          _and: {
            last_name: {
              _ilike: `%${names[1] !== undefined ? names[1] : ""}%`,
            },
          },
        },
      },
    });
  };
  useEffect(() => {
    AddToContact(loading, error, data);
  }, [loading, error, data]);
  return (
    <div css={navbarstyle}>
      <div className="nav-title">
        <p data-testid="title-navbar">PhoneBook</p>
        <p>298 Contact List</p>
      </div>
      <div className="nav-content">
        <img
          onClick={() => setOpen(!open)}
          src={require("../../assets/icons/search.svg").default}
          className="icon search-icon"
          alt="search-icon"
          data-testid="search-icon"
        />
        <img
          onClick={() => navigate("/create")}
          src={require("../../assets/icons/userplus.svg").default}
          className="icon addcontact-icon"
          alt="addcontact-icon"
          data-testid="add-icon"
        />
      </div>
      <div className={`search-container ${open ? "show" : "hidden"}`}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          placeholder="Search"
          data-testid="search-input"
        />
      </div>
    </div>
  );
};

export default Navbar;
