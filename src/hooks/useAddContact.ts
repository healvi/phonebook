import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
const ADD_CONTACT = gql`
  mutation AddContactWithPhones(
    $first_name: String!
    $last_name: String!
    $phones: [phone_insert_input!]!
  ) {
    insert_contact(
      objects: {
        first_name: $first_name
        last_name: $last_name
        phones: { data: $phones }
      }
    ) {
      returning {
        first_name
        last_name
        id
        phones {
          number
        }
      }
    }
  }
`;

const useAddContact = () => {
  const [addContact, { loading, error, data }] = useMutation(ADD_CONTACT);
  useEffect(() => {}, [loading, error, data]);
  return {
    loading,
    error,
    data,
    addContact,
  };
};
export { ADD_CONTACT };
export default useAddContact;
