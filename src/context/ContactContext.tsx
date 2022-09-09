import { useLazyQuery, useMutation } from "@apollo/client";
import { createContext, useContext, useReducer } from "react";
import { DELETE_CONTACT } from "../hooks/useDeleteContact";
import {
  ADD_TOP_CONTACT,
  ADD_TOP_FAVORITE,
  ADD_TOP_PAGINATE,
  FILL_EDIT,
} from "./constant";
import contactReducer, { initialState } from "./contactReducer";
import { useNavigate } from "react-router-dom";
import {
  reducerInterface,
  Contacts,
  ContactWithFav,
  Pagination,
  ContactWIthoutID,
  Contact,
} from "./interfaces";
import { GET_CONTACTS } from "../hooks/useGetContact";
import { ADD_CONTACT } from "../hooks/useAddContact";
import { EDIT_CONTACT, EDIT_NUMBER } from "../hooks/useEditContact";
import { Numbers } from "./interfaces";
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const contactContext = createContext<reducerInterface>(
  initialState as reducerInterface
);

export const ContactProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Contact
  const [getContact, { loading, error }] = useLazyQuery(GET_CONTACTS, {
    fetchPolicy: "network-only",
  });
  // Edit
  const [editContact] = useMutation(EDIT_CONTACT);
  // nUMBER
  const [numberContact] = useMutation(EDIT_NUMBER);
  // Del
  const [delContact] = useMutation(DELETE_CONTACT);
  // Create
  const [addContact] = useMutation(ADD_CONTACT);
  // actions
  const AddToContact = (loading: Boolean, error: any, contacts?: Contacts) => {
    let data = contacts !== undefined ? contacts.contact : [];
    dispatch({
      type: ADD_TOP_CONTACT,
      payload: {
        error: error,
        loading: loading,
        contact: contacts !== undefined ? data : [],
      },
    });
  };

  const AddToFavorite = (data: ContactWithFav) => {
    data.isFavorite = true;
    let favorite = state.favorite;
    let newData = [];
    const isAvaliable =
      favorite !== undefined
        ? favorite.find((element: any) => element.id === data.id)
        : false;
    if (isAvaliable) {
      newData = favorite.filter((element: any) => element.id !== data.id);
    } else {
      if (favorite !== undefined) {
        newData = [...favorite, data];
      } else {
        newData = [data];
      }
    }
    dispatch({
      type: ADD_TOP_FAVORITE,
      payload: {
        data: newData,
      },
    });
  };

  const GettingContact = (pagination: Pagination) => {
    getContact({
      variables: pagination,
      onCompleted: (data) => {
        AddToContact(loading, error, data);
      },
    });
  };

  const DeleteContact = (id: number) => {
    delContact({
      variables: { id },
      onCompleted: () => {
        navigate("/");
        GettingContact(state.pagination);
      },
    });
  };
  const SetPagination = (payload: Pagination) => {
    dispatch({
      type: ADD_TOP_PAGINATE,
      payload: {
        order_by: payload.order_by,
        offset: payload.offset,
        limit: payload.limit,
      },
    });
  };

  const FillEditContact = (forms: Contact) => {
    let after = new Promise(function (myResolve, myReject) {
      dispatch({
        type: FILL_EDIT,
        payload: {
          data: forms,
        },
      });
      myResolve("OK");
    });
    after.then(() => navigate("/edit"));
  };

  const CreateContact = (forms: ContactWIthoutID) => {
    addContact({
      variables: forms,
      onCompleted: () => navigate("/"),
    });
  };

  const postNumberContact = (data: Numbers[]) => {
    // numberContact({
    //   variables: data,
    //   onCompleted: () => navigate("/"),
    // });
  };
  const EditContact = (forms: Contact) => {
    const data = {
      id: forms.id,
      _set: {
        first_name: forms.first_name,
        last_name: forms.last_name,
      },
    };
    editContact({
      variables: data,
      onCompleted: () => navigate("/"),
    });
    postNumberContact(forms.phones);
  };

  const value: reducerInterface = {
    error: state.error,
    loading: state.loading,
    contacts: state.contacts,
    favorite: state.favorite,
    pagination: state.pagination,
    editData: state.editData,
    AddToContact,
    AddToFavorite,
    DeleteContact,
    GettingContact,
    SetPagination,
    CreateContact,
    EditContact,
    FillEditContact,
  };
  return (
    <contactContext.Provider value={value}>{children}</contactContext.Provider>
  );
};

const useContact = () => {
  const context = useContext(contactContext);

  if (context === undefined) {
    throw new Error("useContact must be used within contactContext");
  }

  return context;
};

export default useContact;
