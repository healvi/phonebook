/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import useContact from "../../context/ContactContext";
import { paginationstyle } from "../../styles";

const Pagination = ({ pagination, SetPagination }: any) => {
  const setPaginate = (direction: String) => {
    if (direction === "kiri") {
      SetPagination({
        ...pagination,
        offset:
          pagination.offset > 0 ? pagination.offset - 6 : pagination.offset,
      });
    } else if (direction === "kanan") {
      SetPagination({
        ...pagination,
        offset:
          pagination.offset >= 0 ? pagination.offset + 6 : pagination.offset,
      });
    } else if (direction === "asc") {
      SetPagination({
        ...pagination,
        order_by: [
          {
            first_name: "asc",
          },
        ],
      });
    } else if (direction === "desc") {
      SetPagination({
        ...pagination,
        order_by: [
          {
            first_name: "desc",
          },
        ],
      });
    }
  };

  return (
    <div css={paginationstyle}>
      <div className="pagination-container">
        <div className="pagiantion-item" onClick={() => setPaginate("kiri")}>
          <img
            src={require("../../assets/icons/panahkiri.svg").default}
            className="icon panahkiri-icon"
            alt="panahkiri-icon"
          />
        </div>
        <div onClick={() => setPaginate("asc")} className="pagiantion-item">
          ASC
        </div>
        <div onClick={() => setPaginate("desc")} className="pagiantion-item">
          DESC
        </div>
        <div className="pagiantion-item" onClick={() => setPaginate("kanan")}>
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
