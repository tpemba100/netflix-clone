import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const User = {
  _id: "63ce2080d06b302b527bb7eb",
  username: "tpemba",
  email: "pemba@gmail.com",
  profilePic: "",
  isAdmin: true,
  createdAt: "2023-01-23T05:52:00.706Z",
  updatedAt: "2023-01-23T22:34:57.779Z",
  __v: 0,
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njg2MTM0MSwiZXhwIjoxNjc3MjkzMzQxfQ.5gIJWQJhdpHFZjn3G4UyesQClA2NWbz9sM9nu7QddrA",
};

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(User));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
