import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      className="bg-nurti bg-no-repeat bg-cover bg-right text-gray-600 body-font h-screen"
      id="hero"
    >
      <div className="container mx-auto  flex px-5 py-40 md:flex-row flex-col items-center">
        <div className=" p-4 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font  sm:text-6xl text-4xl mb-4 font-bold text-white">
            One Flower
          </h1>
          <ul className="mb-8 leading-relaxed text-white text-3xl">
            <li>Доставка по Бишкеку</li>
            <li>Лучшие цены в городе</li>
            <li>Всегда свежие цветы</li>
          </ul>
          <div className="flex justify-center">
            <button className="inline-flex text-black border-2 border-green-700 bg-green-400 hover:bg-green-500 duration-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              <a
                href="https://996770023478"
                target="_blank"
                className="inline-flex items-center"
              >
                Заказать по Whatsapp <BsWhatsapp className="m-1 ml-2" />
              </a>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <img
            className="object-cover object-top rounded  t-10 h-full"
            alt="hero"
            // style={{width: "1000px", height: "1000px" }}
            src="images/flower-5.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
