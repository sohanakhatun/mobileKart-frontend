import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import useProducts from "./contexts/productContext";
import ProductItem from "./ProductItem";
const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products, setProducts } = useProducts();

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row">
        <div className="w-[40%] h-screen">
          <SideBar setFilteredProducts={setFilteredProducts} />
        </div>
        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {
                filteredProducts.map((filteredProduct)=>(
                  <ProductItem product={filteredProduct}/>
                ))
              }
            </div>
          ) : (
            <div className="h-screen">
              {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  {products.map((product) => (
                    
                    <ProductItem product={product}/>
                  ))}
                </div>
              ) : (
                <div className="mx-auto">
                  <h1>Error 404 Not Found</h1>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Products;
