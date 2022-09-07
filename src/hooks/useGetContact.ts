import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import useContact from "../context/ContactContext";

const GET_CONTACTS = gql`
  query contacts {
    contact {
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
