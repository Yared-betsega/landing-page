import React from "react";

export default function DownloadButton({text, url, Icon}) {
  return (
    <div className="flex font-Karla w-full">
      <a href={url}
        style={{ textAlign: "end" }}
        className="w-full  py-4 flex justify-center items-center text-lg tracking-widest   transition-colors duration-300 transform bg-white text-black hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        <span className="mr-4 ">{Icon}</span>
       <p className="font-black">{text}</p> 
      </a>
    </div>
  );
}
