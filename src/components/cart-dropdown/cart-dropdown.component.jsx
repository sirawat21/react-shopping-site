import "./cart-dropdown.style.scss";
import Button from "./../button/button.component";

const CartDropdown = () => {
   return(<div className="cart-dropdown-container">
      <div className="cart-items"></div>
      {/* <div className="empty-message"></div> */}
      <Button>Checkout</Button>
   </div>)
}
export default CartDropdown;