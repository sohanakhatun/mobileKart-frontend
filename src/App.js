import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Products from "./Products";
import HomePage from "./HomePage";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { ProductContextProvider } from "./contexts/productContext";
import axios from "axios";
import toast from "react-hot-toast";
import Cart from "./Cart";
import Success from "./paymentPages/Success";
import Cancel from "./paymentPages/Cancel";

const App = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
        
      } catch (error) {
        toast.error("Error fetching products");
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken(null);
    }
  }, []);

  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductContextProvider value={{ products, setProducts }}>
            <Products />
            </ProductContextProvider>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
           <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
           <Success/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cancel"
        element={
          <ProtectedRoute>
           <Cancel/>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
function ProtectedRoute(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default App;
