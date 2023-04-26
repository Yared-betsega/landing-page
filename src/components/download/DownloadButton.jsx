import React from "react";

export default function DownloadButton({text, url}) {
  return (
    <div className="flex">
      <button
        style={{ textAlign: "end" }}
        className="px-20 py-6 ml-5 font-semibold text-xl tracking-wide text-white  transition-colors duration-300 transform bg-black rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        {text}
      </button>
    </div>
  );
}
