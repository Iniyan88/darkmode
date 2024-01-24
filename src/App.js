import React from "react";
import Navbar from "./Navbar";
import Result from "./Result";
import Footer from "./Footer";
import "./index.css";
const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-slate-100 h-screen dark:bg-black text-slate-900 dark:text-slate-100">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Result />
        <Footer />
      </div>
    </div>
  );
};

export default App;
