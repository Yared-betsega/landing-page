import React from 'react'

export default function PriceCard({ type, price, description, actions, url }) {
    return (

        <div className="w-full flex flex-col justify-between items-start max-w-sm p-4 bg-white rounded-lg shadow-2xl sm:p-8 font-Montserrat mx-3 h-[90vh]">
            <div>
                <h5 className="mb-4 text-xl font-semibold text-start ">{type}</h5>
                <div className="flex items-baseline text-gray-900 ">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-3xl font-extrabold tracking-tight">{price}</span>
                    <span className="ml-1 text-xl font-bold">/Monthly</span>
                </div>
                <p className='my-4 text-gray-600 text-start text-sm'>{description}</p>
                <ul role="list" className="space-y-5 my-7">
                    {
                        actions.map((text, key) => {
                            return <li className="flex space-x-3    ">
                                <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-[#DAA624] " fill="currentColor" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" clip-rule="evenodd"></path></svg>
                                <span className="text-sm test-start font-normal leading-tight text-gray-600 ">{text}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div style={{ textAlign: 'end' }} className='w-full self-end' >
                <a href={url} type="button" className=" text-white bg-[#DAA624] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose</a>

            </div>
        </div>

    )
}
