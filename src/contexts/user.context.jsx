import { createContext, useState } from "react";

// Context actual storage context that use for access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Context provider, working as a component
// Context provider use for wrap around any component that want to access actal context value
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
