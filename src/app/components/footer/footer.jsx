"use client";
import React, { useState } from "react";
import styles from "./footer.module.scss";
import categories from "./footerDetails";
import { contact } from "./footerDetails";

const Footer = () => {

  const [country, setCountry] = useState("us");

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.categories}>
          <span>Categories</span>
          {categories.map((category, index) => (
            <a key={index} href={category.link}>
              {category.name}
            </a>
          ))}
        </div>
        <div className={styles.contact}>
          <span>Contact</span>
          {contact.map((contact, index) => (
            <a key={index} href={contact.link}>
              {contact.name}
            </a>
          ))}
        </div>

        <select id="countrySelect"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="in">Canada</option>
          {/* Add other country options here */}
        </select>
      </div>
    </div>
  );
};
export default Footer;
