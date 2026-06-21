import {
  createContext,
  useState,
  useEffect,
} from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] =
    useState(() => {
      const savedLogin =
        localStorage.getItem("isLoggedIn");

      return savedLogin
        ? JSON.parse(savedLogin)
        : false;
    });

  useEffect(() => {
    localStorage.setItem(
      "isLoggedIn",
      JSON.stringify(isLoggedIn)
    );
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;