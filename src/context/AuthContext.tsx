"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define User Context Type
interface UserContextType {
  isLoggedIn: boolean;
  userName: string;
  uid: string;
  email: string;
  setUser: React.Dispatch<
    React.SetStateAction<{
      isLoggedIn: boolean;
      userName: string;
      uid: string;
      email: string;
    }>
  >;
  logout: () => void
}

// Create User Context with Default Values
const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  userName: "",
  uid: "",
  email: "",
  setUser: () => { },
  logout: () => { }
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState(() => {
    // On first load, check if there is any user in local storage
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
        isLoggedIn: false,
        userName: "",
        uid: "",
        email: "",
      };
  });

  useEffect(() => {
    // Whenever the user state changes, update localStorage
    if (user.isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Define the logout function
  const logout = () => {
    setUser({
      isLoggedIn: false,
      userName: "",
      uid: "",
      email: "",
    });
    localStorage.removeItem("user"); // Clear localStorage on logout
    window.location.replace('/auth/login')
  };

  return (
    <UserContext.Provider value={{ ...user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to Access User Context
export const useUserAuth = () => {
  return useContext(UserContext);
};
