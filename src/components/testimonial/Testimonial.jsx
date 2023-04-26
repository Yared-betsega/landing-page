import React from "react";
import TestimonialCard from "./TestimonialCard";
import image1 from "../../assets/images/testimonial_1.png";
import image2 from "../../assets/images/testimonial_2.png";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
export default function Testimonial() {
  return (
    <div className="">
      <div className="flex py-16">
        <div className="w-full">
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
              <div className="flex items-center max-w-6xl mx-auto ">
                <button
                  title="left arrow"
                  className="hidden p-3 text-gray-800 bg-gray-100 transition-colors duration-300  rounded-full rtl:-scale-x-100  lg:block hover:bg-gray-100"
                >
                  <HiOutlineArrowSmallLeft size={25}></HiOutlineArrowSmallLeft>
                </button>

                <TestimonialCard
                  image={image1}
                  name={"Ebere Mosses"}
                  desc={
                    "Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text "
                  }
                  rating={4.2}
                ></TestimonialCard>
                <TestimonialCard
                  image={image2}
                  name={"John Peter"}
                  desc={
                    "Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy text "
                  }
                  rating={4.2}
                ></TestimonialCard>

                <button
                  title="right arrow"
                  className="hidden p-3 text-gray-800 bg-gray-100 transition-colors duration-300  rounded-full rtl:-scale-x-100  lg:block hover:bg-gray-100"
                >
                  <HiOutlineArrowSmallRight
                    size={25}
                  ></HiOutlineArrowSmallRight>
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="w-full">
        <div className="flex">
              <button
                style={{ textAlign: "end" }}
                className="px-5 py-1 font-semibold text-lg tracking-wide text-[#DAA624]  transition-colors duration-300 transform bg-[#F5EFDE] rounded-xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Testimonies From Client
              </button>
            </div>
          <div class="mt-8 lg:w-full lg:px-6 lg:mt-0 text-start">
            
            <h1 class="text-2xl font-semibold text-gray-800 lg:text-4xl lg:w-full my-10">
              What our client say about us
            </h1>

            <p class="max-w-lg mt-6 my-10 text-xl tracking-wide">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s..
            </p>
            <div className="flex mb-28">
              <a
                href="#"
                style={{ textAlign: "end" }}
                className="px-14 py-2 ml-5 font-semibold text-xl tracking-wide text-white  transition-colors duration-300 transform bg-[#DAA624] rounded-xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
