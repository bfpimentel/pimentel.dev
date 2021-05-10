import React from "react";

type SocialButtonProps = {
  link: string;
  imgSrc: string;
};

export default function SocialButton({ link, imgSrc }: SocialButtonProps) {
  return (
    <button className="h-8 w-8 border-1 rounded-lg ml-2 mr-2 bg-white">
      <a href={link}>
        <img className="h-8 w-8" src={imgSrc} />
      </a>
    </button>
  );
}
