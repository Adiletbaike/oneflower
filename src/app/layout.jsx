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
    <>
      <head>
        <title>OneFlower</title>
      </head>
      <html lang="en" className="!scroll-smooth">
        <body>
          <Header />
          <Hero />
          <Catalog />
          <Products />
          <About />
          <Footer />
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
        </body>
      </html>
    </>
  );
};

export default Layout;
