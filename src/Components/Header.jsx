"use client";
import React, { useEffect, useState } from "react";
import { LuFlower2 } from "react-icons/lu";
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
    <header className="bg-nurti text-black bg-opacity-80 body-font fixed w-full font-serif">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
          <LuFlower2 className="text-5xl text-red-600" />
          <span className="ml-3 text-3xl text-white font-bold">OneFlower</span>
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute text-white right-8 top-7 cursor-pointer md:hidden"
        >
          {open ? <RiCloseCircleLine /> : <RiMenu4Fill />}
        </div>
        <nav
          className={`md:ml-auto flex flex-wrap absolute md:static flex-col md:m-0 mt-10 md:flex-row items-center text-base justify-center pb-12 md:pb-0 bg-white text-black md:text-white md:w-auto md:bg-transparent h-screen md:h-auto md:z-auto z-[-1] w-full transition-all duration-500 ease-in ${
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
          <Link
            href="#about"
            onClick={closeMenu}
            className="mr-5 hover:text-gray-900 hover:underline py-4 hover:underline-offset-8 text-lg font-medium"
          >
            О нас
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="mr-5 hover:text-gray-900 hover:underline py-4 hover:underline-offset-8 text-lg font-medium"
          >
            Контакты
          </Link>
          <button className="inline-flex text-black items-center bg-green-400 border-2 border-green-700 py-1 px-3 focus:outline-none hover:bg-green-500 duration-500 rounded-full text-base mt-4 md:mt-0">
            <a
              href="https://wa.me/996770023478"
              className="inline-flex items-center "
              target="_blank"
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
