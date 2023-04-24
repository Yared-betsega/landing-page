import React from 'react'
export default function FeatureCard({ imageUrl, text, link, bgColor }) {
    return (
        <div className={`bg-[${bgColor}] flex flex-col justify-center px-8 py-4 max-w-sm rounded overflow-hidden shadow-lg rounded-2xl `}>
            <img className="mx-auto my-auto" src={imageUrl} alt="Sunset in the mountains"></img>
            <div className="px-4 py-2">
                <div className="font-bold text-white text-xl mb-2">{text}</div>

            </div>
            <a className='text-white mt-auto' href={link}>Learn more</a>
        </div>
    )
}
