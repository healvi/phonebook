import { useQuery, gql } from "@apollo/client";

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

const useContact = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS);

  return {
    loading,
    error,
    data,
  };
};

export default useContact;
