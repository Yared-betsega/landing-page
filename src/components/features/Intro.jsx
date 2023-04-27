import React from "react";

export default function Intro({ headerText, descriptionText }) {
  return (
    <div className="mt-28 mb-20 sm:mx-20 lg:mx-40 md:px-20 font-Montserrat text-center">
      <h1 className="text-5xl text-black font-bold">{headerText}</h1>
      <p className="capitalize text-base sm:text-2xl font-normal mt-10 text-center">
        {descriptionText}
      </p>
    </div>
  );
}
