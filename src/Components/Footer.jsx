import React from "react";
import { BsFlower1 } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephoneInboundFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-black" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">
              Контакты
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://www.instagram.com/one_flower_bishkek/"
                  target="_blank"
                  className="flex items-center text-white leading-8 hover:text-gray-300 hover:text-lg duration-500"
                >
                  <SiInstagram className="mr-5" />
                  one_flower_bishkek
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/996770023478"
                  target="_blank"
                  className="flex items-center text-white leading-8 hover:text-gray-300 hover:text-lg duration-500"
                >
                  <BsWhatsapp className="mr-5" />
                  +996 770 02 34 78
                </a>
              </li>
              <li>
                <a
                  href="tel:996770023478"
                  target="_blank"
                  className="flex items-center text-white leading-8 hover:text-gray-300 hover:text-lg duration-500"
                >
                  <BsTelephoneInboundFill className="mr-5" />
                  +996 770 02 34 78
                </a>
              </li>
              <li>
                <a
                  href="https://2gis.kg/bishkek/geo/70030076165570403?m=74.617881%2C42.866184%2F18.26"
                  target="_blank"
                  className="flex items-center text-white leading-8 hover:text-gray-300 hover:text-lg duration-500"
                >
                  <ImLocation className="mr-5" />
                  Ибраимова 29/2
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">
              Адрес
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1462.1682663682736!2d74.61699718580707!3d42.8657405488866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d2c40da377%3A0x9039cb257e332483!2sBismillah%20lodge!5e0!3m2!1sen!2skg!4v1697019266853!5m2!1sen!2skg"
                  width="auto"
                  height="auto"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-4 mx-auto flex justify-between items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <BsFlower1 className="text-xl text-red-600" />
            <span className="ml-3 text-xl">OneFlower</span>
          </a>
          <p className="text-sm text-gray-500 justify-end sm:ml-6 sm:mt-0 mt-4">
            © 2023 OneFlower
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
