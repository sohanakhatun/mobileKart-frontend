import React, { createContext, useContext } from "react";

export const ProductContext = createContext({ products: [], setProducts: () => {} });

export const ProductContextProvider = ProductContext.Provider

export default function useProducts(){
    return useContext(ProductContext);
}