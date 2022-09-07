/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { listcontactstyle } from "../../styles";
import { Contact } from "../../context/interfaces";
import { Navigate, useNavigate } from "react-router-dom";

const ListContact = (props: any) => {
  const navigate = useNavigate();
  const { first_name, last_name, id, phones } = props.data;
  return (
    <div css={listcontactstyle} onClick={() => navigate(`/details/${id}`)}>
      <div className="image-contact">
        <img
          src={require("../../assets/icons/usersnoround.svg").default}
          className="icon addcontact-icon"
          alt="addcontact-icon"
        />
      </div>
      <div className="info-contact">
        <p className="name-contact">
          {first_name} {last_name}
        </p>
        {phones.length ? (
          <p className="number-contact">{phones[0].number}</p>
        ) : (
          <p className="number-contact">Belum Ada Number</p>
        )}
      </div>
      {/* <div className="action-contact">
        <img
          src={require("../../assets/icons/nofavorites.svg").default}
          className="icon favorite-icon"
          alt="favorite-icon"
        />
      </div> */}
    </div>
  );
};

export default ListContact;
