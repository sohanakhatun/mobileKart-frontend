import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/Slices/CartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ProductItem = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item added to Cart");
    navigate("/cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item removed from Cart");
  };
  return (
    <div>
      <div
        key={product.id}
        className="p-6 mt-10 bg-white rounded shadow-md shadow-stone-400  flex flex-col"
      >
        <img src={product.picture} alt="picture" width={300} height={300} />
        <p className=" font-medium text-blue-700"> {product.name}</p>
        <p className=" font-medium text-green-700">
         $ {product.price}
        </p>
        <p className=" font-medium text-blue-700">{product.Type}</p>
        <p className=" font-medium text-blue-700">{product.processor}</p>
        <p className=" font-medium text-blue-700">{product.memory}</p>
        <p className=" font-medium text-blue-700">{product.OS}</p>

        {cart.some((p) => p.id == product.id) ? (
          <button
            className="product text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="product text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
