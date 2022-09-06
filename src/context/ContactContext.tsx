import React, { createContext, useContext, useReducer } from "react";
import { ADD_TOP_CONTACT } from "./constant";
import contactReducer, { initialState } from "./contactReducer";
import { valueInterface, reducerInterface } from "./interfaces";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const contactContext = createContext<valueInterface>(initialState);

export const ContactProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addToContact = (contact: []) => {
    const updatedCart = state.contacts.concat(contact);
    dispatch({
      type: ADD_TOP_CONTACT,
      payload: {
        contacts: updatedCart,
      },
    });
  };

  const value: reducerInterface = {
    contacts: state.contacts,
    favorite: state.favorite,
    addToContact,
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
