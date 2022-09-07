import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";
const DELETE_CONTACT = gql`
  mutation MyMutation($id: Int!) {
    delete_contact_by_pk(id: $id) {
      first_name
      last_name
      id
    }
  }
`;

const useDeleteContact = () => {
  const [delteContact, { loading, error, data }] = useMutation(DELETE_CONTACT);
  useEffect(() => {
    console.log(data);
  }, [loading, error, data]);
  return {
    loading,
    error,
    data,
    delteContact,
  };
};
export { DELETE_CONTACT };
export default useDeleteContact;
