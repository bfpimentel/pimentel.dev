import { useTheme } from "next-themes";
import SocialButton from "@/components/SocialButton";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer className="sticky top-[100vh] flex justify-between max-w-4xl w-full h-full border-t p-5 border-black border-opacity-10 dark:border-white dark:border-opacity-10">
      <div className="pt-1">
        <SocialButton imgSrc="/linkedin.svg" link="https://linkedin.com/in/bfpimentel/" />
        <SocialButton imgSrc="/github.svg" link="https://github.com/bfpimentel/" />
      </div>

      <button
        onClick={switchTheme}
        className="p-2 rounded-md font-bold bg-black text-white dark:bg-white dark:text-black"
      >
        Show me the {theme === "light" ? "Dark" : "Light"}
      </button>
    </footer>
  );
}
