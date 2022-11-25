import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "./../../contexts/user.context";
import { signOutUser } from "./../../utils/firebase/firebase.utils";
import "./navigation.style.scss";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // Signout handler
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }; 
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <div className="nav-links-container">
          {currentUser ? (
            <Link className="nav-link" onClick={signOutHandler}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
