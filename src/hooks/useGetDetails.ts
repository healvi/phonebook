import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_DETAILS = gql`
  query GetContactDetail($id: Int!) {
    contact_by_pk(id: $id) {
      last_name
      id
      first_name
      phones {
        number
      }
    }
  }
`;

const useGetDetails = () => {
  const [getDetails, { loading, error, data }] = useLazyQuery(GET_DETAILS);

  useEffect(() => {}, [loading, error, data]);
  return {
    loading,
    error,
    data,
    getDetails,
  };
};
export { GET_DETAILS };
export default useGetDetails;
