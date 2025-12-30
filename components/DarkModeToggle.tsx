"use client";
import { useState, useEffect, use } from "react";
import { Moon } from "lucide-react";
export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
    } else {
      htmlElement.classList.add("light");
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <button
        onClick={() => {
          setIsDarkMode((prev) => !prev);
        }}
        className="bg-cyan-700 rounded-[50%] w-[50px] h-[50px] fixed  sm:bottom-4 sm:right-4"
      >
        <Moon className="flex justify-center w-full"/>
      </button>
    </>
  );
}
