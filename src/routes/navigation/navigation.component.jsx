import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import HomeLogo from "../../assets/home-logo.jpg";
import { UserContext } from "./../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "./../../components/cart-icon/cart-icon.component";
import CartDropdown from "./../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "./../../contexts/cart.context";
import "./navigation.style.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={HomeLogo} className="logo" alt="site-logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
        <div className="nav-links-container">
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {
          isCartOpen &&  <CartDropdown />
        }
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
