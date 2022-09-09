import {
  ADD_TOP_CONTACT,
  ADD_TOP_FAVORITE,
  ADD_TOP_PAGINATE,
  FILL_EDIT,
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
  editData: {
    id: 0,
    first_name: "",
    last_name: "",
    phones: [],
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
    case FILL_EDIT:
      return {
        ...state,
        editData: payload.data,
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
