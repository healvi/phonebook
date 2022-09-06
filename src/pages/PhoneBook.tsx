/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { homestyle } from "../styles";
import { ListContact } from "../components";
import Pagination from "../components/molekul/Pagination";
import useContact from "../hooks/useContact";
const PhoneBook = () => {
  const { loading, error, data } = useContact();
  useEffect(() => {
    console.log(loading);
    console.log(error);
    console.log(data);
  }, []);
  return (
    <div css={homestyle}>
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <ListContact />
      <Pagination />
    </div>
  );
};

export default PhoneBook;
