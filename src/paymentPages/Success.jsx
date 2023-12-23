import React from 'react'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
          <h1 className=" cart-text text-gray-700 font-semibold text-xl mb-2">
            Your Payment was successfull
          </h1>
          <p className="cart-text text-gray-600 tracking-wide mt-2">
            Explore new stock and shop more
          </p>
          <Link to={"/products"}>
            <button className="cart-text bg-green-600 hover:bg-purple-50 rounded-lg text-white transition-all ease-linear duration-300 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 mt-5 uppercase tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
  )
}

export default Success