import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "./assets/homepage.jpg";
import aboutImage from "./assets/about.jpg";
import Navbar from "./Navbar";
const HomePage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/register");
  };
  return (
    <div >
      {/* navbar */}
      <Navbar/>
      {/* End of Navbar */}

      {/* Hero section */}
      <div className="relative flex justify-center h-screen w-screen">
        <img
          src={HeroImage}
          alt=""
          className="absolute object-cover h-screen w-screen brightness-50 sm:w-screen "
        />
        <h2 className=" absolute text-white z-40 mt-[200px] text-2xl font-extrabold sm:text-7xl">
          {" "}
          Shop Latest
        </h2>
        <h2 className=" absolute text-white z-40 mt-[250px] text-4xl  font-extrabold sm:text-6xl sm:mt-[300px]">
          SmartPhones
        </h2>
        <h2 className=" absolute text-white z-40 mt-[300px] text-4xl font-extrabold sm:text-7xl sm:mt-[380px]">
          on MobileKart
        </h2>
      </div>
      {/* About us */}
      <div className=" sm:flex flex-row xsm:flex-col">
        <div className="">
          <img src={aboutImage} className=" rounded-lg mt-20 ml-20 w-3/4" />
        </div>

        <div className="mt-20 mr-10">
          <h2 className=" ml-4 text-4xl font-extrabold  text-blue-900">About Us</h2>
          <p className="mt-2 font-medium ml-4">
            Welcome to MobileKart, an ecommerce business based in Bangalore,
            Karnataka, India. We are passionate about providing our customers
            with the latest mobile devices and accessories at competitive
            prices. With a commitment to exceptional customer service, we strive
            to make your online shopping experience seamless and enjoyable. Our
            team of experts is always ready to assist you in finding the perfect
            mobile phone or accessory to meet your needs. Shop with confidence
            at MobileKart, where quality, affordability, and customer
            satisfaction are our top priorities.
          </p>
        </div>
      </div>

      {/* signup  */}
      <div className="flex flex-col justify-center items-center gap-4 mt-10  rounded-t-3xl">
        <h2 className="text-4xl font-extrabold text-blue-900  mt-4">
          Get Started!
        </h2>
        <h2 className="text-2xl font-extrabold text-blue-900 ">
          Login/Register to Continue
        </h2>

        <button
          type="button"
          onClick={clickHandler}
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Signup
        </button>
      </div>

      {/* Footer */}

    
    </div>
  );
};

export default HomePage;
