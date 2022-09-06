import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

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
  const { loading, error, data } = useQuery(GET_CONTACTS);
  useEffect(() => {}, [loading, data, error]);
  return {
    loading,
    error,
    data,
  };
};

export default useGetContact;
