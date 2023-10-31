'use client'
import React, { useEffect } from "react";
import { BsFlower1 } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Link from 'next/link';

const Header = () => {
  useEffect(() => {
    // Smooth scroll behavior when clicking on internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener('click', smoothScroll);
    });
  }, []);

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="bg-gray-400 text-black bg-opacity-80 body-font fixed w-full font-serif">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
          <BsFlower1 className="text-xl text-red-600" />
          <span className="ml-3 text-2xl font-bold">OneFlower</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#hero" className="mr-5 hover:text-gray-900 hover:underline hover:underline-offset-8 text-lg font-medium">
            Главная
          </Link>
          <Link href="#about" className="mr-5 hover:text-gray-900 hover:underline hover:underline-offset-8 text-lg font-medium">О нас</Link>
          <Link href="#catalog" className="mr-5 hover:text-gray-900 hover:underline hover:underline-offset-8 text-lg font-medium">
            Каталог
          </Link>
          <Link href="#products" className="mr-5 hover:text-gray-900 hover:underline hover:underline-offset-8 text-lg font-medium">Цветы</Link>
          <a href="#contact" className="mr-5 hover:text-gray-900 hover:underline hover:underline-offset-8 text-lg font-medium">
            Контакты
          </a>
        </nav>
        <button className="inline-flex items-center bg-green-400 border-2 border-green-700 py-1 px-3 focus:outline-none hover:bg-green-500 duration-500 rounded-full text-base mt-4 md:mt-0">
          <a href="https://wa.me/996703041099" className="inline-flex items-center ">
            Whatsapp
            <BsWhatsapp className="m-2" />
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
