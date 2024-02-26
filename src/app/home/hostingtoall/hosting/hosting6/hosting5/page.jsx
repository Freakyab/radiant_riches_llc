"use client";
// Required Libraries and Components
import { useState } from "react";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";

import Footer from "./../../../../../components/footer/footer";
import Navbar from "./../../../../../components/navbar";
import Card from "./../../../../../components/card/card";
import OptionButton from "./../../../../../components/optionButton/button";
import LinkRouter from "./../../../../../components/Links/linkRouter";
import SignupComponent from "./../../../../../components/signup/signupComponent";
import CardSlider from "./../../../../../components/cardSlider/cardSlider";
import styles from "./../../../../../page.module.css";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Top Relevant");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.details}>
          <h1 className={styles.header}>Best Website builders in the US</h1>
          <span className={styles.segment}></span>
          <div className={styles.segmentDetails}>
            <div className={styles.section}>
              <span className={styles.detailIcon}>
                <CiCircleCheck size={20} />
                Last Updated
              </span>
              <span className={styles.detailIcon}> - February 22, 2020</span>
              <span className={styles.detailIcon}>
                <CiCircleInfo size={20} title="Info" />
                Advertising Disclosure
              </span>
            </div>
            <span className={styles.detailSelection}>
              <select
                className={styles.select}
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option className={styles.option} value="Top Relevant">
                  Top Relevant
                </option>
                <option className={styles.option} value="Top Rated">
                  Top Rated
                </option>
              </select>
            </span>
          </div>
          <span className={styles.segment}></span>
          <OptionButton />
          <LinkRouter />
          <Card />
          <CardSlider />
          <SignupComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}
