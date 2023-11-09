import React from "react";

const Pagination = () => {
  return (
    <div class="flex flex-row m-2 rounded-2xl p-1 bg-gray-100 justify-center">
      {" "}
      <a
        class="rounded-full hover:bg-nurti font-medium m-2 hover:text-white shadow-lg border px-2 duration-300"
        href="#"
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a>{" "}
      <a
        class="rounded-full hover:bg-nurti font-medium m-2 hover:text-white shadow-lg border px-2 duration-300"
        href="#"
      >
        1
      </a>{" "}
      <a
        class="rounded-full hover:bg-nurti font-medium m-2 hover:text-white shadow-lg border px-2 duration-300"
        href="#"
      >
        2
      </a>{" "}
      <a
        class="rounded-full hover:bg-nurti font-medium m-2 hover:text-white shadow-lg border px-2 duration-300"
        href="#"
      >
        3
      </a>{" "}
      <a
        class="rounded-full hover:bg-nurti font-medium m-2 hover:text-white shadow-lg border px-2 duration-300"
        href="#"
      >
        ..
      </a>{" "}
      <a
        class="rounded-full hover:bg-nurti font-medium m-2 hover:text-white shadow-lg border px-2 "
        href="#"
      >
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </a>{" "}
    </div>
  );
};

export default Pagination;
