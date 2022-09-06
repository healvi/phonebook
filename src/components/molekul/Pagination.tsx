/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import useContact from "../../context/ContactContext";
import { paginationstyle } from "../../styles";
const Pagination = () => {
  const [paginate, setPaginate] = useState({
    limit: 10,
  });
  const { loading, error, contacts } = useContact();
  useEffect(() => {
    console.log(contacts);
  }, [loading, error, contacts]);
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
