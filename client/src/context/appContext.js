import React, { useReducer, useContext } from "react";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actions";

import reducer from "./reducer";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  token: null,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    setTimeout(() => {
      clearAlert();
    }, 3000);
  };

  const clearAlert = () => {
    dispatch({ type: CLEAR_ALERT });
  };

  const registerUser = async (currentUser) => {
    console.log(currentUser);
  };
  return (
    <AppContext.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
