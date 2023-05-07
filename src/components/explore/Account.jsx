import React from "react";
export default function Account({ swap, image, title, description, url }) {
  return (
    <section class="bg-white font-Montserrat">
      <div class="container px-10 py-10 mx-auto">
        <div class=" lg:flex lg:items-center">
          <img
            class={`${
              swap ? "order-last " : " "
            } object-scale-down	 object-center lg:w-1/2 lg:mx- w-full h-96 rounded-lg lg:h-[36rem]`}
            src={image}
            alt="The social account"
          ></img>

          <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 text-start">
            <h1 class="w-full text-4xl font-semibold text-gray-800 lg:text-4.5xl my-10">
              {title}
            </h1>

            <p class="font-[400]  mt-6 my-10 leading-loose text-xl md:text-2xl md:leading-relaxed tracking-wide">
              {description}
            </p>
            <div className="flex mb-28">
              <a
                href={url}
                style={{ textAlign: "end" }}
                className="px-16 py-4 font-[600] text-2xl tracking-wide text-[#DAA624]  transition-colors duration-300 transform bg-[#F8EED5] rounded-xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
