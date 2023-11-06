import React from "react";

const Catalog = () => {
  return (
    <section className="bg-gray-100 text-gray-600 body-font" id="catalog">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto static">
          <h1 className="sm:text-3xl font-lobster text-2xl text-center font-bold title-font mb-4 text-gray-900">
            Каталог букетов
          </h1>
          <div className="flex flex-wrap -mx-2 py-4">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-50 z-0 absolute inset-0"
                  src="https://tsvetomania.ru/upload/resize_cache/iblock/d26/710_605_1/d261c1882ee10cfb75fa1b2b34626002.jpg"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                    Тюльпаны
                  </h2>
                  {/* <p className="leading-relaxed">
                    Skateboard +1 mustache fixie paleo lumbersexual.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                  src="https://flowry.ru/wp-content/uploads/2022/06/51roz-.jpg"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                    Розы
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-70 absolute inset-0"
              src="https://thumbs.dreamstime.com/b/summer-flower-arrangements-counter-136087291.jpg"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-3xl text-gray-900 font-bold title-font mb-2">
                Авторские букеты
              </h2>
              <p className="leading-relaxed text-white text-3xl font-lobster font-bold">на ваш вкус.</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                  src="https://cdn.iportal.ru/preview/news/articles/a2fe5f18378c5be0e152ba6d4e16e5490ab35d22_1000_667_c.jpg"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                    Пионы
                  </h2>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                  src="https://img5.lalafo.com/i/posters/original/69/71/60/a81cdae4b13457c71c284f4c86.jpeg"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-gray-900 font-bold title-font mb-2">
                    Мишки
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
