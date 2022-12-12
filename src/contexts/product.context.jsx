import { createContext, useState } from "react";
import SHOP_DATA from "./../shop-data.json";

// Context actual storage
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

// Provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
