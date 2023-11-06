import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-600 body-font" id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl font-lobster text-2xl font-bold title-font mb-4 text-gray-900">
            О нас
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center items-stretch">
          <div className="p-4 md:w-1/4 w-1/2 w-full">
            <div className="border-2 border-nurti px-2 py-6 rounded-lg">
              <img
                src="images/icons8-card-96.png"
                alt=""
                // style={{ width: "80px", height: "80px" }}
                className="inline-block h-auto w-auto"
              />
              <h2 className="title-font font-lobster font-medium text-2xl text-gray-900 py-5">
                Удобная оплата
              </h2>
              <p className="leading-relaxed" style={{ height: "150px" }}>
                Картами: VISA, Mastercard, ЭЛКАРТ, Maestro Электроные кошельки:
                O! деньги и Balance.kg Оплата через терминалы: UMAI, ОНОЙ,
                QUICKPAY
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-1/2 w-full">
            <div className="border-2 place-content-center border-nurti px-2 py-6 rounded-lg">
              <img
                src="images/icons8-christmas-gift-96.png"
                alt=""
                // style={{ width: "80px", height: "80px" }}
                className="inline-block h-auto w-auto"
              />
              <h2 className="title-font font-medium font-lobster text-2xl text-gray-900 py-5">
                Подарочная упаковка
              </h2>
              <p className="leading-relaxed" style={{ height: "150px" }}>
                А так же вы можете передать с цветами дополнительные подарки,
                виде игрушек, шариков, тортика или фруктов и алкоголи .
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 w-1/2 w-full">
            <div className="border-2 border-nurti px-2 py-6 rounded-lg">
              <img
                src="images/icons8-market-square-96.png"
                alt=""
                // style={{ width: "80px", height: "80px" }}
                className="inline-block h-auto w-auto"
              />
              <h2 className="title-font font-medium font-lobster text-2xl text-gray-900 py-5">
                Фото перед доставкой
              </h2>
              <p className="leading-relaxed" style={{ height: "150px" }}>
                Отправляем в мессенджеры фотографию собранного букета перед
                доставкой. Также можем сделать фото с цветами при вручении
              </p>
            </div>
          </div>
          <div className="p-4 w-1/2 md:w-1/4 w-full  min-h-full">
            <div className="border-2 border-nurti px-2 py-6 rounded-lg">
              <img
                src="images/icons8-motorcycle-delivery-multiple-boxes-96.png"
                alt=""
                // style={{ width: "80px", height: "80px" }}
                className="inline-block h-auto w-auto"
              />
              <h2 className="title-font font-medium font-lobster text-2xl text-gray-900 py-5">
                Бесплатная доставка
              </h2>
              <p className="leading-relaxed" style={{ height: "150px" }}>
                Бесплатная доставка по Бишкеку при заказе на сумму от 5000 сом.
                По городу 200 сом. Доставка за пределы города рассчитывается
                автоматически из стоимости 1 км
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
