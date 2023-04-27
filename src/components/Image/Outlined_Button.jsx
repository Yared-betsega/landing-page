import React from "react";

export default function OutlinedButton({ text, shallow }) {
  return (
    <div className="flex">
      <button
        style={{ textAlign: "end" }}
        className={`${shallow ? 'bg-transparent text-[#DAA624] ' : 'bg-[#DAA624] '} px-5 lg:px-14 py-4 lg:py-5 ml-5 font-semibold text-xs md:text-base lg:text-xl border border-[#DAA624] tracking-wide transition-colors duration-300 transform  rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80`}
      >
        {text}
      </button>
    </div>
  );
}
