import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SocialButton from "@/components/SocialButton";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <footer className="sticky top-[100vh] flex justify-between max-w-4xl w-full h-full border-t p-5 border-black border-opacity-10 dark:border-white dark:border-opacity-10">
      <div className="pt-1">
        <SocialButton imgSrc="/linkedin.svg" link="https://linkedin.com/in/bfpimentel/" />
        <SocialButton imgSrc="/github.svg" link="https://github.com/bfpimentel/" />
      </div>

      {/* <a className="pt-2" href="https://pimentel.dev">
        bfmp
      </a> */}

      <button
        onClick={switchTheme}
        className="p-2 rounded-md font-bold bg-black text-white dark:bg-white dark:text-black"
      >
        Show me the {theme === "light" ? "Dark" : "Light"}
      </button>
    </footer>
  );
}
