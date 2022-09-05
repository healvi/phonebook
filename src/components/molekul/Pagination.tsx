/** @jsxImportSource @emotion/react */
import React from "react";
import { paginationstyle } from "../../styles";
const Pagination = () => {
  return (
    <div css={paginationstyle}>
      <div className="pagination-container">
        <div className="pagiantion-item" onClick={() => console.log("kiri")}>
          <img
            src={require("../../assets/icons/panahkiri.svg").default}
            className="icon panahkiri-icon"
            alt="panahkiri-icon"
          />
        </div>
        <div className="pagiantion-item">10 of 10</div>
        <div className="pagiantion-item" onClick={() => console.log("kanan")}>
          <img
            src={require("../../assets/icons/panahkanan.svg").default}
            className="icon panahkanan-icon"
            alt="panahkanan-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
