import React from "react";
import image from "../../assets/images/upper_image.png";
import OutlinedButton from "./Outlined_Button";
export default function Image() {
  return (
    <div class="flex justify-center relative mix-blend-lighten min-h-screen">
      <img
        class="object-cover w-full  relative h-[] object-right"
        src={image}
      />
      <div className="absolute  w-auto mx-44 mx-10 sm:mx-40 lg:mx-60 mt-2 sm:mt-2 md:mt-3 lg:mt-10 xl:mt-6 2xl:mt-40 object-cover object-right">
        <div className="flex flex-col font-Montserrat">
          <h1
            className="tracking-wide text-xl sm:text-2xl md:text-3xl xl:text-5xl leading-loose sm:leading-normal md:leading-normal xl:leading-normal capitalize text-white font-semibold"
          >
            empowering undeserved market with digital skill and career
            opportunity{" "}
          </h1>
          <p className="text-white text-base md:text-xl lg:text-2xl my-10 font-light">
            We are committed to helping millennial's, graduates small business
            owners, and entrepreneurs realize their potential and achieve
            success.
          </p>
          <div className="flex items-center justify-center mt-20">
            <OutlinedButton text={"Get Started"} shallow={false}></OutlinedButton>
            <OutlinedButton text={"How it Works"} shallow={true}></OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
