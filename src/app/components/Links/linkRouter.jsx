"use client";

// Required Libraries and Components
import React from "react";
import Link from "next/link";
import style from "./linkRouter.module.scss";

const LinkRouter = () => {
  const links = [
    { name: "Home", link: "/home" },
    { name: "Hosting for all", link: "/home/hostingtoall" },
    { name: "Hosting", link: "/home/hostingtoall/hosting" },
    { name: "Hosting6", link: "/home/hostingtoall/hosting/hosting6" },
    { name: "Hosting5", link: "/home/hostingtoall/hosting/hosting6/hosting5" },
  ];

  return (
    <div className={style.links}>
      {links.map((link, index) => (
        <Link key={index} href={link.link} style={{ textDecoration: "none" }}>
          <span className={style.link}>
            {link.name}
            {" >"}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default LinkRouter;
