import { get, onValue, ref } from "firebase/database";
import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

export const AllProductsContext = createContext();

function ProductContext({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a state for loading

  const productsRef = ref(db, "ourproducts");

  get(productsRef).then((snapshot) => {
    const productsData = snapshot.val();

    // Filter products with red color or available in red
    const filteredProducts = Object.values(productsData).filter(
      (product) =>
        product.Color === "White" ||
        product.colorsAvailable?.includes("White") ||
        product.Size === "M"
    );
  });

  useEffect(() => {
    const myDataRef = ref(db, "ourproducts");
    onValue(myDataRef, (snapshot) => {
      const data = snapshot.val();
      setAllProducts(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <AllProductsContext.Provider
      value={{ allProducts, setAllProducts, isLoading }}
    >
      {children}
    </AllProductsContext.Provider>
  );
}

export default ProductContext;
