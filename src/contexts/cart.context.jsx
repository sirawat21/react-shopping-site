import { createContext, useState } from "react";

/* Helper cart added item */
const addCartItem = (cartItems, productToAdd) => {
   const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id);
   if(existingCartItem) {
      return cartItems.map(cartItem => {
         if (cartItem.id == productToAdd.id) {
            return {...cartItem, quantity: cartItem.quantity + 1}
         } else {
            return cartItem
         }
      });
   }
   return [...cartItems, { ...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);
   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
   }

   const [isCartOpen, setIsCartOpen] = useState(false);
   const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
