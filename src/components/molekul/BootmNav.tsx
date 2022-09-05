/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { bottomnavstyle } from "../../styles";
import { useLocation, NavLink } from "react-router-dom";
const BootmNav = () => {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div css={bottomnavstyle}>
      <NavLink to={`/`} className="bottom-items ">
        <img
          src={require("../../assets/icons/book.svg").default}
          className="icon book-icon"
          alt="book-icon"
        />
      </NavLink>
      <NavLink to={`/favorite`} className="bottom-items">
        <img
          src={require("../../assets/icons/favorites.svg").default}
          className="icon favorite-icon"
          alt="favorite-icon"
        />
      </NavLink>
    </div>
  );
};

export default BootmNav;
