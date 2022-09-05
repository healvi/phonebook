/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { listcontactstyle } from "../../styles";

const ListContact = () => {
  return (
    <div css={listcontactstyle}>
      <div className="image-contact">
        <img
          src={require("../../assets/icons/usersnoround.svg").default}
          className="icon addcontact-icon"
          alt="addcontact-icon"
        />
      </div>
      <div className="info-contact">
        <p className="name-contact">Mohammad Irvan</p>
        <p className="number-contact">085735784123</p>
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
