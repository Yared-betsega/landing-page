import React from 'react'

export default function Link({text, url}) {
  return (
    <a className="my-2 text-xl font-normal text-white transition-colors duration-300 transform  hover:text-blue-500 sm:mx-1 md:mx-3 2xl:mx-8 md:my-0" href={url}>{text}</a>
  )
}
