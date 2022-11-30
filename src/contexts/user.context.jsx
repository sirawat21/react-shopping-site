import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./../utils/firebase/firebase.utils";

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

  // Running on authstate change 
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user); 
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
