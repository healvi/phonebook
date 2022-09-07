import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import useContact from "../context/ContactContext";

const GET_DETAILS = gql`
  query GetContactDetail($id: Int!) {
    contact_by_pk(id: $id) {
      last_name
      id
      first_name
      created_at
      phones {
        number
      }
    }
  }
`;

const useGetDetails = (id: number) => {
  const { loading, error, data } = useQuery(GET_DETAILS, {
    variables: { id },
  });

  useEffect(() => {}, [loading, error, data]);
  return {
    loading,
    error,
    data,
  };
};

export default useGetDetails;
