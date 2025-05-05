import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setThemeMode } from "../redux/productsListSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const isLightTheme = useSelector(
    (store) => store.productsListSlice.isLightTheme
  );
  // console.log(isLightTheme);

  const cartItem = useSelector((store) => store.cartSlice.items);
  // console.log(cartItem);
  const dispatchTheme = useDispatch();

  // const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    dispatchTheme(setThemeMode(!isLightTheme));
  };

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 ${
        isLightTheme ? "bg-[#94d2bd] text-black" : "bg-[#001219] text-white"
      }`}>
      <Link to="/">
        <div className="flex items-center space-x-3">
          <img
            src="https://img.icons8.com/?size=100&id=llnqvTERRls7&format=png&color=000000"
            alt="ShoppyGlobe Logo"
            className="h-8 w-8"
          />
          <h1 className="text-2xl font-bold text-[#ee9b00]">ShoppyGlobe</h1>
        </div>
      </Link>

      <nav className="flex space-x-4 font-bold text-center">
        <Link to="/">
          <img
            src="https://img.icons8.com/?size=100&id=73&format=png&color=000000"
            alt="homeIcon"
            className="w-7 h-7"
          />
          <p
            className={`${
              isLightTheme ? "text-[#005f73]" : "text-[#94d2bd]"
            } hover:underline`}>
            Home
          </p>
        </Link>
        <Link to="/cart">
          <img
            src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
            alt="cartIcon"
            className="w-7 h-7"
          />
          <p
            className={`${
              isLightTheme ? "text-[#005f73]" : "text-[#94d2bd]"
            } hover:underline `}>
            Cart {cartItem.length}
          </p>
        </Link>
      </nav>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md text-white bg-[#005f73] hover:bg-[#0a9396] transition">
        {isLightTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
