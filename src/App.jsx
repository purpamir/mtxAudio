import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import CartPage from "./pages/Cart";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs";
import OldSkool from "./pages/OldSkool";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* <nav className="bg-gray-800 text-white p-4">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/cart">Cart</Link>
        </nav> */}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/oldskool" element={<OldSkool />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
