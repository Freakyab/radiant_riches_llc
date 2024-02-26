"use client";
// Required Libraries and Components
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    toast("Coming soon!");
  };
  return (
    <nav>
      <div className="navField">
        <span className="searchField">
          <span className="searchFieldIcon"
           onClick = {handleSubmit}
          >
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
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
