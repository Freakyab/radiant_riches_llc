"use client";

import { CiSearch } from "react-icons/ci";
import { useState } from "react";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <nav>
      <div className="navField">
        <span className="searchField">
          <span className="searchFieldIcon">
            <CiSearch size={24} />
          </span>
          <input type="text" />
        </span>
        <span className={`${show ? "show" : "menu"}`}>
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's deals</li>
        </span>



        <span className="btn" onClick={handleClick}>
          {show ? "Close" : "Menu"}
        </span>

      </div>
    </nav>
  );
};

export default Navbar;
