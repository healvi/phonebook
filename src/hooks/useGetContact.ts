import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import useContact from "../context/ContactContext";

const GET_CONTACTS = gql`
  query GetContactList(
    $distinct_on: [contact_select_column!]
    $limit: Int
    $offset: Int
    $order_by: [contact_order_by!]
    $where: contact_bool_exp
  ) {
    contact(
      distinct_on: $distinct_on
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      created_at
      first_name
      id
      last_name
      phones {
        number
      }
    }
  }
`;

const useGetContact = () => {
  const [getContact, { loading, error, data }] = useLazyQuery(GET_CONTACTS);
  const { AddToContact } = useContact();
  useEffect(() => {
    AddToContact(loading, error, data);
  }, [loading, error, data]);
  return {
    loading,
    error,
    data,
    getContact,
  };
};
export { GET_CONTACTS };
export default useGetContact;
