"use client";

// Required Libraries and Components
import React from "react";
import { motion } from "framer-motion";
import CardDetails from "../cardSlider/cardDetails";
import styles from "./cardSlider.module.scss";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cardSlider = () => {
  const handleSumbit = () => {
    toast("Coming soon!");
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}>
      <h2>Related deals you might like for</h2>

      {/*  Card Slider */}
      <div className={styles.cardSlider}>
        {CardDetails.map((card, index) => (
          <motion.div
            key={index}
            className={styles.cards}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <div className={styles.image}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.tagsBlock}>
              {card.tags.map((tag, index) => (
                <span key={index} className={styles.tags}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Card Details */}
            <div className={styles.cardDetails}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p>{card.details}</p>
              <div>
                <span className={styles.price}>{card.price}</span>
                <span className={styles.actualPrice}>{card.actualPrice}</span>
                <span className={styles.discount}>{`(${card.tags[0]})`}</span>
              </div>
              <button className={styles.viewDetails} onClick={handleSumbit}>
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default cardSlider;
