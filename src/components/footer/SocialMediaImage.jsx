import React from "react";

export default function SocialMediaImage({image, url}) {
  return (
    <a
      href={url}
      className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
      aria-label="Github"
    >
      <img src={image} alt="" />
    </a>
  );
}
