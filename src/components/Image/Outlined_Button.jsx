import React from 'react'

export default function OutlinedButton({text}) {
  return (
    <div className='flex'>
            <button style={{ textAlign: "end" }} className="bg-transparent px-14 py-4 ml-5 font-semibold text-xl border border-[#DAA624] tracking-wide text-[#DAA624]  transition-colors duration-300 transform  rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                {text}
            </button>
        </div>
  )
}
