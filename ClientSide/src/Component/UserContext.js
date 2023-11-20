import React, { createContext, useReducer, useContext, useEffect } from "react";

const UserContext = createContext();

const initialState = {
  name: "",
  email: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case "LOGOUT":
      return {
        ...initialState, // Reset state to initial values
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName && storedEmail) {
      dispatch({ type: "LOGIN", payload: { name: storedName, email: storedEmail } });
    }
  }, []);

  const login = (name, email) => {
    // Dispatch the login action to update the global state
    dispatch({ type: "LOGIN", payload: { name, email } });

    // Update localStorage with the new user data
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const logout = () => {
    // Dispatch the logout action to clear the global state
    dispatch({ type: "LOGOUT" });

    // Clear user data from localStorage
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  };

  return (
    <UserContext.Provider value={{ state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
