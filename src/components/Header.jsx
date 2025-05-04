import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode } from "../reduc/productsListSlice";

const Header = () => {
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );
  console.log(isLightTheme);

  const dispatchTheme = useDispatch();

  // const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    dispatchTheme(setThemeMode(!isLightTheme));
  };

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 ${
        isLightTheme ? "bg-[#94d2bd]" : "bg-[#001219]"
      }`}>
      <div className="flex items-center space-x-3">
        <img
          src="https://img.icons8.com/?size=100&id=llnqvTERRls7&format=png&color=000000"
          alt="ShoppyGlobe Logo"
          className="h-8 w-8"
        />
        <h1 className="text-2xl font-bold text-[#ee9b00]">ShoppyGlobe</h1>
      </div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md text-white bg-[#005f73] hover:bg-[#0a9396] transition">
        {isLightTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
