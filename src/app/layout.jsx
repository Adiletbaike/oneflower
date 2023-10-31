import React from "react";
import "./globals.css";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Catalog from "@/Components/Catalog";
import Footer from "@/Components/Footer";
import Products from "@/Components/Products";

const Layout = ({ children }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Header />
        <Hero/>
        <About/>
        <Catalog/>
        <Products/>
        <Footer/>
      </body>
    </html>
  );
};

export default Layout;
