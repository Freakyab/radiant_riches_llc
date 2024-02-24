"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

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
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
