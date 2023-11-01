"use client";
import React, { useEffect, useState } from "react";
import { BsFlower1 } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseCircleLine } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    // Smooth scroll behavior when clicking on internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }, []);

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <header className="bg-gray-400 text-black bg-opacity-80 body-font fixed w-full font-serif">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
          <BsFlower1 className="text-5xl text-red-600" />
          <span className="ml-3 text-2xl font-bold">OneFlower</span>
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden"
        >
          {open ? <RiCloseCircleLine /> : <RiMenu4Fill />}
        </div>
        <nav
          className={`md:ml-auto flex flex-wrap absolute md:static flex-col md:m-0 mt-10 md:flex-row items-center text-base justify-center pb-12 md:pb-0 bg-gray-100 bg-opacity-70 md:w-auto md:bg-transparent h-screen md:h-auto md:z-auto z-[-1] w-full transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-1000px]"
          }`}
        >
          <Link
            href="#hero"
            onClick={closeMenu}
            className="mr-5 hover:text-gray-900 hover:underline py-4 hover:underline-offset-8 text-lg font-medium"
          >
            Главная
          </Link>
          <Link
            href="#about"
            onClick={closeMenu}
            className="mr-5 hover:text-gray-900 hover:underline py-4 hover:underline-offset-8 text-lg font-medium"
          >
            О нас
          </Link>
          <Link
            href="#catalog"
            onClick={closeMenu}
            className="mr-5 hover:text-gray-900 hover:underline py-4 hover:underline-offset-8 text-lg font-medium"
          >
            Каталог
          </Link>
          <Link
            href="#products"
            onClick={closeMenu}
            className="mr-5 hover:text-gray-900 hover:underline py-4 hover:underline-offset-8 text-lg font-medium"
          >
            Цветы
          </Link>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mr-5 hover:text-gray-900 hover:underline py-4 hover:underline-offset-8 text-lg font-medium"
          >
            Контакты
          </a>
          <button className="inline-flex items-center bg-green-400 border-2 border-green-700 py-1 px-3 focus:outline-none hover:bg-green-500 duration-500 rounded-full text-base mt-4 md:mt-0">
            <a
              href="https://wa.me/996703041099"
              className="inline-flex items-center "
            >
              Whatsapp
              <BsWhatsapp className="m-2" />
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
