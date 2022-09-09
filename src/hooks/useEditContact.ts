import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

const EDIT_CONTACT = gql`
  mutation EditContactById($id: Int!, $_set: contact_set_input) {
    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      first_name
      last_name
      phones {
        number
      }
    }
  }
`;

const EDIT_NUMBER = gql`
  mutation EditPhoneNumber(
    $pk_columns: phone_pk_columns_input!
    $new_phone_number: String!
  ) {
    update_phone_by_pk(
      pk_columns: $pk_columns
      _set: { number: $new_phone_number }
    ) {
      contact {
        id
        last_name
        first_name
        created_at
        phones {
          number
        }
      }
    }
  }
`;

const useEditConatct = () => {
  const [getDetails, { loading, error, data }] = useLazyQuery(EDIT_CONTACT);

  useEffect(() => {}, [loading, error, data]);
  return {
    loading,
    error,
    data,
    getDetails,
  };
};
export { EDIT_CONTACT, EDIT_NUMBER };
export default useEditConatct;
