import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<string>("light");

  useEffect(() => {
    const existingPreference = localStorage.getItem("darkMode") || "light";
    setDarkMode(existingPreference);
    if (existingPreference === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = darkMode === "light" ? "dark" : "light";
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", newMode);
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;
