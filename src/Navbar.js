import React, { useEffect } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const handleKeys = (e) => {
    if (e.key === "s" || e.key === "S") {
      setDarkMode(!darkMode);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeys);
    return () => {
      window.removeEventListener("keydown", handleKeys);
    };
  }, [darkMode]);
  return (
    <div className="flex  items-center justify-end text-slate-900 dark:text-slate-100  ">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="border rounded-lg px-4 py-2 m-2 border-slate-900 dark:border-slate-100 bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900"
      >
        {darkMode ? "Light🔆" : "Dark🌙"}
      </button>
    </div>
  );
};

export default Navbar;
