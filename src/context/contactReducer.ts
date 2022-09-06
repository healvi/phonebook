import { ADD_TOP_CONTACT, ADD_TOP_FAVORITE } from "./constant";
import { valueInterface } from "./interfaces";

export const initialState: valueInterface = {
  contacts: [],
  favorite: [],
};

const contactReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TOP_CONTACT:
      return {
        ...state,
        contact: payload.contact,
      };
    case ADD_TOP_FAVORITE:
      return {
        ...state,
        contact: payload,
      };
    default:
      throw new Error(`No case for type ${type} found in contactReducer.`);
  }
};

export default contactReducer;
