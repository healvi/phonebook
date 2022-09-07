import React, { createContext, useContext, useReducer } from "react";
import { ADD_TOP_CONTACT } from "./constant";
import contactReducer, { initialState } from "./contactReducer";
import { reducerInterface, Contacts } from "./interfaces";
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const contactContext = createContext<reducerInterface>(
  initialState as reducerInterface
);

export const ContactProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
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

  const value: reducerInterface = {
    error: state.error,
    loading: state.loading,
    contacts: state.contacts,
    favorite: state.favorite,
    AddToContact,
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
