import React from "react";
import ButtonFilled from "./ButtonFilled";
// import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <header className="flex w-full min-h-12 h-fit items-center justify-between ">
        <nav className="">
          <ul className="flex text-secondary gap-7">
            <li className="cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <p id="Logo" className="font-bold text-[primary] text-2xl">
          Landing
        </p>
        <ButtonFilled label="Buy Now "></ButtonFilled>
      </header>
    </>
  );
}

export default Navbar;
