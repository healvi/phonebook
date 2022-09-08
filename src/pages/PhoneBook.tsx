/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { homestyle } from "../styles";
import { ListContact } from "../components";
import Pagination from "../components/molekul/Pagination";
import useContact from "../context/ContactContext";
import { Contact, ContactWithFav } from "../context/interfaces";

const PhoneBook = () => {
  const { GettingContact } = useContact();
  const { pagination, SetPagination } = useContact();
  const { loading, error, contacts, favorite } = useContact();
  const [listContact, setListContact] = useState<ContactWithFav[]>([]);
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
    console.log(listContact);
    setFavList();
  }, [loading, error, contacts, favorite]);

  useEffect(() => {
    GettingContact(pagination);
  }, [pagination]);

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
        <Pagination pagination={pagination} SetPagination={SetPagination} />
      </div>
    </>
  );
};

export default PhoneBook;
