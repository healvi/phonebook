/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { homestyle } from "../styles";
import { ListContact } from "../components";
import Pagination from "../components/molekul/Pagination";
const PhoneBook = () => {
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
