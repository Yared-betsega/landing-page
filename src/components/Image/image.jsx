import React from "react";
import image from "../../assets/images/upper_image.png";
import logo from "../../assets/images/larger_logo.png";
import Button from "../navbar/Button";
import OutlinedButton from "./Outlined_Button";
export default function Image() {
  return (
    <div class="flex justify-center relative mix-blend-lighten">
      <img
        class="object-cover w-full  relative h-[] object-right"
        src={image}
      />
      <div className="absolute  w-auto mx-44 sm:mx-60 mt-2 sm:mt-2 md:mt-3 lg:mt-10 xl:mt-6 2xl:mt-40 object-cover object-right">
        <div className="flex flex-col font-Montserrat">
          <h1
            style={{ lineHeight: "4rem" }}
            className="tracking-wide text-5xl capitalize text-white font-semibold"
          >
            empowering undeserved market with digital skill and career
            opportunity{" "}
          </h1>
          <p className="text-white text-2xl my-10 font-light">
            We are committed to helping millennial's, graduates small business
            owners, and entrepreneurs realize their potential and achieve
            success.
          </p>
          <div className="flex items-center justify-center mt-20">
            <Button text={"Get Started"}></Button>
            <OutlinedButton text={"How it Works"}></OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
