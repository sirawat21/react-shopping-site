import { createContext, useState } from "react";

// Context actual storage
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Context provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
