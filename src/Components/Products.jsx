import React from "react";
import productsData from "./productsData";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const Products = () => {
  return (
    <section className="text-gray-600 body-font" id="products">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-lobster text-center font-bold title-font mb-4 text-gray-900">
          Цветы
        </h1>
        <div className="flex flex-wrap justify-stretch">
          {productsData.map((value, index) => {
            return (
              <div
                className="lg:w-60  w-size p-1 pb-4 m-1 mt-3 rounded-lg border-2 border-nurti shadow-lg"
                key={index}
              >
                <a className="block static w-full md:w-full h-40 md:h-60 rounded overflow-hidden">
                  <Image
                    width={1920}
                    height={1080}
                    alt="ecommerce"
                    className="object-cover object-center hover:static hover:scale-110 duration-500 w-full h-full block"
                    src={value.image}
                  />
                </a>
                <div className="mt-4">
                  {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3> */}
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {value.name}
                  </h2>
                  <p className="mt-1 text-nurti font-semibold italic">{value.price}</p>
                </div>
                <div className="flex justify-start">
                  <button className="inline-flex text-black bg-green-400 hover:bg-green-500 duration-500 border-0 py-1 px-2 focus:outline-none  rounded text-sm">
                    <a
                      href="https://996778217044"
                      className="inline-flex items-center text-xs md:text-base"
                    >
                      Заказать по <BsWhatsapp className="m-1 ml-2 text-xs" />
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
