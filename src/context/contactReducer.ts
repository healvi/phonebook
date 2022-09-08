import {
  ADD_TOP_CONTACT,
  ADD_TOP_FAVORITE,
  ADD_TOP_PAGINATE,
} from "./constant";
import { valueInterface } from "./interfaces";

export const initialState: valueInterface = {
  loading: false,
  error: [],
  contacts: [],
  favorite: [],
  pagination: {
    order_by: [{ first_name: "asc" }],
    offset: 0,
    limit: 10,
  },
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
    case ADD_TOP_FAVORITE:
      return {
        ...state,
        favorite: payload.data,
      };
    case ADD_TOP_PAGINATE:
      return {
        ...state,
        pagination: {
          order_by: payload.order_by,
          offset: payload.offset,
          limit: payload.limit,
        },
      };
    default:
      throw new Error(`No case for type ${type} found in contactReducer.`);
  }
};

export default contactReducer;
