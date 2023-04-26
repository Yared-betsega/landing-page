import React from "react";
import DownloadButton from "./DownloadButton";

export default function Download() {
  return (
    <div className="bg-[#DAA624] py-28 mx-20 rounded-3xl font-Montserrat">
      <div className="flex flex-col mx-80 gap-10 justify-center items-center">
        <DownloadButton text={"Get started with our web app"}></DownloadButton>

        <p className="text-3xl text-white">
          Download Hot Platform Website To Get digital skill and career
          opportunity{" "}
        </p>
        <div className="flex justify-center items-center">
          <DownloadButton text={"App Store"}></DownloadButton>
          <DownloadButton text={"Google Playstore"}></DownloadButton>
        </div>
      </div>
    </div>
  );
}
