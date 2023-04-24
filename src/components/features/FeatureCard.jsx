import React from 'react'
export default function FeatureCard({ imageUrl, headerText, descriptionText }) {
    return (
        <div className={`flex flex-col justify-center px-8 py-4 max-w-sm  overflow-hidden font-Montserrat`}>
            <img className="mx-auto my-auto" src={imageUrl} alt="Sunset in the mountains"></img>
            <div className="px-4 py-2">
                <div className="font-bold  text-2xl mb-2">{headerText}</div>

            </div>
            <p className='font-normal'>{descriptionText}</p>
        </div>
    )
}
