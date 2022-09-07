/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { homestyle } from "../styles";
import { ListContact } from "../components";
import Pagination from "../components/molekul/Pagination";
import useContact from "../context/ContactContext";
import { Contact } from "../context/interfaces";
import useGetContact from "../hooks/useGetContact";
const PhoneBook = () => {
  const { getContact } = useGetContact();
  const { loading, error, contacts } = useContact();
  useEffect(() => {
    console.log("reload");
    getContact();
  }, []);
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
          <div>Data Empty</div>
        )
      ) : (
        <div>Loading.......</div>
      )}
      <Pagination />
    </div>
  );
};

export default PhoneBook;
