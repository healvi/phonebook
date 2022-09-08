/** @jsxImportSource @emotion/react */
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import useContact from "../../context/ContactContext";
import { GET_CONTACTS } from "../../hooks/useGetContact";
import { paginationstyle } from "../../styles";
const Pagination = ({ AddToContact }: any) => {
  const [getContact, { loading, error }] = useLazyQuery(GET_CONTACTS);

  const [pagination, setPagination] = useState({
    order_by: [{ first_name: "asc" }],
    offset: 0,
    limit: 15,
  });
  const setPaginate = (direction: String) => {
    if (direction === "kiri") {
      setPagination({
        ...pagination,
        offset:
          pagination.offset > 0 ? pagination.offset - 6 : pagination.offset,
      });
    } else if (direction === "kanan") {
      setPagination({
        ...pagination,
        offset:
          pagination.offset >= 0 ? pagination.offset + 6 : pagination.offset,
      });
    } else if (direction === "asc") {
      setPagination({
        ...pagination,
        order_by: [
          {
            first_name: "asc",
          },
        ],
      });
    } else if (direction === "desc") {
      setPagination({
        ...pagination,
        order_by: [
          {
            first_name: "desc",
          },
        ],
      });
    }
  };
  useEffect(() => {
    getContact({
      variables: pagination,
      onCompleted: (data) => {
        AddToContact(loading, error, data);
      },
    });
  }, [pagination]);
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
