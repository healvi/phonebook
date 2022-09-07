import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import useContact from "../context/ContactContext";
const GET_DETAILS = gql`
  query GetContactDetail($where: contact_bool_exp) {
    contact(where: $where) {
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

const useSearchContact = () => {
  const { AddToContact } = useContact();
  const [searchContact, { loading, error, data }] = useLazyQuery(GET_DETAILS);

  useEffect(() => {
    AddToContact(loading, error, data);
  }, [loading, error, data]);

  return {
    loading,
    error,
    data,
    searchContact,
  };
};

export default useSearchContact;
