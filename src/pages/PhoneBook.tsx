/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { homestyle } from "../styles";
import { ListContact } from "../components";
import Pagination from "../components/molekul/Pagination";
import useContact from "../context/ContactContext";
import { Contact, ContactWithFav } from "../context/interfaces";
import { useState } from "react";
const PhoneBook = () => {
  const { loading, error, contacts, favorite } = useContact();
  const [listContact, setListContact] = useState<ContactWithFav[]>([]);
  const { AddToContact } = useContact();
  const setFavList = () => {
    const newData = contacts.map((contacts) => ({
      ...contacts,
      isFavorite:
        favorite !== undefined
          ? favorite.find((fav) => fav.id === contacts.id)
            ? true
            : false
          : false,
    }));
    setListContact(newData);
  };
  useEffect(() => {
    setFavList();
  }, [loading, error, contacts, favorite]);
  return (
    <>
      <div css={homestyle}>
        {!loading ? (
          listContact.length ? (
            listContact.map(
              (value: ContactWithFav, index: number, array: Contact[]) => {
                return value.isFavorite ? (
                  <></>
                ) : (
                  <ListContact key={index} data={value} />
                );
              }
            )
          ) : (
            <div>Data Empty</div>
          )
        ) : (
          <div>Loading.......</div>
        )}
        <Pagination AddToContact={AddToContact} />
      </div>
    </>
  );
};

export default PhoneBook;
