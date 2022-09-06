export interface valueInterface {
  contacts: Contacts[];
  favorite: Contacts[];
}

export interface reducerInterface {
  contacts: Contacts[];
  favorite: Contacts[];
  addToContact: (contact: []) => void;
}

export interface Contacts {
  contact: Contact[];
}

export interface Contact {
  created_at: String;
  first_name: String;
  id: 5;
  last_name: String;
  phones: Numbers[];
}
export interface Numbers {
  number: String;
}
