import React from "react";
import SocialButton from "@/components/SocialButton";

export default function Footer() {
  return (
    <footer className="grid justify-items-center max-w-4xl w-full h-full border-t border-gray-800 p-6">
      <div>
        <SocialButton
          imgSrc="/linkedin.svg"
          link="https://linkedin.com/in/bfpimentel/"
        />
        <SocialButton
          imgSrc="/github.svg"
          link="https://github.com/bfpimentel/"
        />
      </div>
    </footer>
  );
}
