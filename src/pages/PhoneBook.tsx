/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { homestyle } from "../styles";
import { ListContact } from "../components";
import Pagination from "../components/molekul/Pagination";
import useContact from "../context/ContactContext";
import { Contact } from "../context/interfaces";
const PhoneBook = () => {
  const { loading, error, contacts } = useContact();
  useEffect(() => {
    console.log(contacts);
  }, [loading, error, contacts]);
  return (
    <div css={homestyle}>
      {!loading ? (
        contacts.length ? (
          contacts.map((value: Contact, index: number, array: Contact[]) => (
            <ListContact key={index} data={value} />
          ))
        ) : (
          <div>Loading.......</div>
        )
      ) : (
        <div>Loading.......</div>
      )}
      <Pagination />
    </div>
  );
};

export default PhoneBook;
