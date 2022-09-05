/** @jsxImportSource @emotion/react */
import React from "react";
import { ListContact } from "../components";
import { detailstyle } from "../styles";

const Details = () => {
  return (
    <div css={detailstyle}>
      <div className="details-container">
        {/* avatar */}
        <div className="avatar-contact">
          <img
            src={`http://placeimg.com/50/50/people`}
            className="icons search-icon"
            alt="search-icon"
          />
        </div>
        {/* name */}
        <div className="deskripsi-contanct">
          <div className="image-contact">
            <img
              src={require("../assets/icons/usersnoround.svg").default}
              className="icon addcontact-icon"
              alt="addcontact-icon"
            />
          </div>
          <div className="deskripsi">
            <p>Mohammad irvan</p>
            <p>Name</p>
          </div>
        </div>
        {/* nuumber */}
        <div className="deskripsi-contanct-number">
          <div className="image-contact">
            <img
              src={require("../assets/icons/telp.svg").default}
              className="icon addcontact-icon"
              alt="addcontact-icon"
            />
          </div>
          <div className="deskripsi">
            <p>0984828482482</p>
            <p>Number</p>
          </div>
        </div>
        <button className="btn btn-edit">Edit</button>
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default Details;
