import { createContext, useState  } from "react";

// Actual created context
export const UserContext = createContext(
   {
      currentuser: null,
      setCurrentUser: () => null
   }
);
export const UserProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null)
   const value = {currentUser, setCurrentUser};
   return(<UserContext.Provider value={value}>{children}</UserContext.Provider>)
}
