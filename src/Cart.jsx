import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import { loadStripe } from "@stripe/stripe-js";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  // Payment Integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OQNSTSJ34HTlRfMoZPvLrP75z4msVt1G3u2lW23uxr0jcuj8Pbb5nKVxPhb7k48YUIDpzi0ko4gZM8OnrMWbZDC00uCdHUzZq"
    );

    const body = {
      products: cart,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "https://mobilekart-backend.onrender.com/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({ sessionId: session.id });

    if ((await result).error) {
      console.log((await result).error)
    }
  };
  return (
    <div className="cart">
      <Navbar />
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  itemIndex={index}
                  className="border-b-2"
                />
              );
            })}
          </div>

          <div className="w-full md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">
              <div className="flex flex-col gap-5">
                <div className="font-semibold text-xl text-green-800 uppercase">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-blue-700 -mt-5 uppercase">
                  Summary
                </div>
                <p className="text-xl font-bold">
                  <span className="cart-text text-gray-700 font-semibold text-xl">
                    Total Items :{" "}
                  </span>
                  {cart.length}
                </p>
              </div>

              {/* bb-2 boderslate500 */}

              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  <span className="cart-text text-gray-700 font-semibold">
                    Total Amount :{" "}
                  </span>
                  <p className="text-green-700">${totalAmount}</p>
                </p>
                <button
                  onClick={makePayment}
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
          <h1 className=" cart-text text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <p className="cart-text text-gray-600 tracking-wide mt-2">
            Explore new stock and shop now
          </p>
          <Link to={"/products"}>
            <button className="cart-text bg-green-600 hover:bg-purple-50 rounded-lg text-white transition-all ease-linear duration-300 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 mt-5 uppercase tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
