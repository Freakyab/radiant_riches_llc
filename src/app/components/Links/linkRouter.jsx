"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "./linkRouter.module.scss";

const LinkRouter = () => {
  const [links, setLinks] = useState([
    "Home",
    "Hosting for all",
    "Hosting",
    "Hosting6",
    "Hosting5",
  ]);

  return (
    <div className={style.links}>
      {links.map((link, index) => (
        <Link
          href={`/${link.toLowerCase()}`}
          key={index}
          className={style.link}>
          {link}
          {index < links.length - 1 ? " > " : null}
        </Link>
      ))}
    </div>
  );
};

export default LinkRouter;
