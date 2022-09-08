/** @jsxImportSource @emotion/react */
import React from "react";
import { listcontactstyle } from "../../styles";
import { useNavigate } from "react-router-dom";
import useContact from "../../context/ContactContext";
import { useEffect } from "react";

const ListContact = (props: any) => {
  const navigate = useNavigate();
  const { AddToFavorite, DeleteContact } = useContact();
  const { first_name, last_name, id, phones, isFavorite } = props.data;
  useEffect(() => {}, []);
  return (
    <div css={listcontactstyle}>
      <div className="deskripsi" onClick={() => navigate(`/details/${id}`)}>
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
      </div>
      <div className="action-contact">
        {isFavorite ? (
          <img
            onClick={() => AddToFavorite(props.data)}
            src={require("../../assets/icons/favorites.svg").default}
            className="icon favorite-icon"
            alt="favorite-icon"
          />
        ) : (
          <div className="bundle">
            <img
              onClick={() => AddToFavorite(props.data)}
              src={require("../../assets/icons/nofavorites.svg").default}
              className="icon favorite-icon"
              alt="favorite-icon"
            />
            <img
              onClick={() => DeleteContact(props.data.id)}
              src={require("../../assets/icons/trash.svg").default}
              className="icon favorite-icon"
              alt="favorite-icon"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListContact;
