import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      navigate("/login");
      toast.success("Logged out successfully");
    } else {
      navigate("/register");
    }
  };

  function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  }
  return (
    <div>
      <nav className=" bg-blue-950 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white font-semibold text-lg">MobileKart</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/" className="text-white">
              About
            </a>
            <a href="/products" className="text-white">
              Products
            </a>
            <FaShoppingCart size={30} color="white" className={
            localStorage.getItem("user") ? "" :" hidden"
          }/>
            
              {localStorage.getItem("user") ? (
                
                <button onClick={clickHandler} className="bg-white p-[8px] rounded-lg w-[90px] font-semibold">
                  Logout
                </button>
          
               
              ) : (
                <Link to="/register">
                <button className="bg-white p-[8px] rounded-lg w-[90px] font-semibold">
                  Signin
                </button>
                </Link>
                
              )}
           
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => toggleMenu()}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:hidden bg-gray-700 p-4 hidden" id="mobileMenu">
          <a href="/" className="block text-white py-2">
            Home
          </a>
          <a href="/about" className="block text-white py-2">
            About
          </a>
          <a href="/products" className="block text-white py-2">
            Products
          </a>
          <a href="/contact" className="block text-white py-2">
            Contact
          </a>
         
          <FaShoppingCart size={30} color="white" className={
            localStorage.getItem("user") ? "" :" hidden"
          }/>
          <button>
              {localStorage.getItem("user") ? (
                <p className="bg-white p-[8px] rounded-lg w-[90px] font-semibold mt-2">
                  Login
                </p>
              ) : (
                <p className="bg-white p-[8px] rounded-lg w-[90px] font-semibold mt-2">
                  Signin
                </p>
              )}
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
