import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authState';
import contactsInitialState from './initialStates/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
