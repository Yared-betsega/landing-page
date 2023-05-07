import React from "react";
import DownloadButton from "./DownloadButton";
import { AiFillApple } from "react-icons/ai";
import {IoLogoGooglePlaystore} from 'react-icons/io5'
export default function Download() {
  return (
    <div className="bg-[#DAA624] py-20 2xl:py-28 mx-8 md:mx-20 rounded-3xl">
      <div className="flex flex-col mx-4 sm:mx-10 lg:md-28 xl:mx-60 2xl:mx-80 lg:px-12 gap-12 justify-center items-center">
        <div className="font-Poppins flex justify-center w-full tracking-widest">
          <button
            style={{ textAlign: "end" }}
            className="px-3 sm:px-5  py-2.5 md:ml-5 text-[1rem] md:text-normal font-bold tracking-wide text-white  transition-colors duration-300 transform bg-[#B78B1E] hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Get started with our web app
          </button>
        </div>

        <p className="font-Poppins text-2xl md:text-3xl text-white font-semibold leading-10 md:leading-12 tracking-wide">
          
           Download Hot Platform Website To Get digital skill and career
          opportunity{" "}
        </p>
        <div className="flex flex-col md:flex-row  justify-center items-center w-full gap-8">
          <DownloadButton Icon = {<AiFillApple size={40}></AiFillApple>} text={"App Store"}></DownloadButton>
          <DownloadButton Icon={<IoLogoGooglePlaystore size={40}></IoLogoGooglePlaystore>} text={"Google Playstore"}></DownloadButton>
        </div>
      </div>
    </div>
  );
}
