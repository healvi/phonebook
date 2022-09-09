/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { bottomnavstyle } from "../../styles";
import { useLocation, NavLink } from "react-router-dom";
const BootmNav = () => {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div data-testid="bottom-nav" css={bottomnavstyle}>
      <NavLink to={`/`} className="bottom-items " data-testid="regular-contact">
        <img
          src={require("../../assets/icons/book.svg").default}
          className="icon book-icon"
          alt="book-icon"
        />
      </NavLink>
      <NavLink
        to={`/favorite`}
        className="bottom-items"
        data-testid="favorite-contact"
      >
        <img
          src={require("../../assets/icons/nofavorites.svg").default}
          className="icon favorite-icon"
          alt="favorite-icon"
        />
      </NavLink>
    </div>
  );
};

export default BootmNav;
