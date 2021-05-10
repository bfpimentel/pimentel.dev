import React from "react";
import SocialButton from "@/components/SocialButton";

type FooterProps = {
  onSwitchClick: () => void;
  theme: string;
};

export default function Footer({ onSwitchClick, theme }: FooterProps) {
  return (
    <footer className="flex justify-between max-w-4xl w-full h-full border-t p-5 border-black border-opacity-10 dark:border-white dark:border-opacity-10">
      <div className="pt-1">
        <SocialButton
          imgSrc="/linkedin.svg"
          link="https://linkedin.com/in/bfpimentel/"
        />
        <SocialButton
          imgSrc="/github.svg"
          link="https://github.com/bfpimentel/"
        />
      </div>

      <button
        onClick={onSwitchClick}
        className="p-2 rounded-md font-bold bg-black text-white dark:bg-white dark:text-black"
      >
        Give me {theme === "light" ? "Darkness" : "Light"}
      </button>
    </footer>
  );
}
