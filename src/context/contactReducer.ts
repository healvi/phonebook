import {
  ADD_TOP_CONTACT,
  ADD_TOP_FAVORITE,
  ADD_TOP_PAGINATE,
} from "./constant";
import { valueInterface, Contacts } from "./interfaces";

export const initialState: valueInterface = {
  loading: false,
  error: [],
  contacts: [],
  favorite: [],
};

const contactReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TOP_CONTACT:
      return {
        ...state,
        error: payload.error,
        loading: payload.loading,
        contacts: payload.contact,
      };
    case ADD_TOP_PAGINATE:
      return {
        ...state,
        error: payload.error,
        loading: payload.loading,
        contacts: payload.contact,
      };
    case ADD_TOP_FAVORITE:
      return {
        ...state,
        favorite: payload,
      };
    default:
      throw new Error(`No case for type ${type} found in contactReducer.`);
  }
};

export default contactReducer;
