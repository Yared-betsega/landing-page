import React from 'react'

export default function Button({text}) {
    return (
        <div className='flex'>
            <button style={{ textAlign: "end" }} className="px-14 py-4 ml-5 font-semibold text-xl tracking-wide text-black  transition-colors duration-300 transform bg-[#DAA624] rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                {text}
            </button>
        </div>

    )
}
