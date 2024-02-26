"use client";
// Required Libraries and Components
import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { CiCircleInfo, CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CountUp } from "use-count-up";
import CardDetails from "./cardDetails";
import styles from "./card.module.scss";
import Image from "next/image";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = () => {
  // Handle Submit
  const handleSumbit = () => {
    toast.info("Coming soon!", {
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  return (
    <LazyMotion features={domAnimation}>
      {CardDetails.map((card, index) => {
        return (
          <m.div
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              transition: { duration: 0.2 },
            }}
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: 100 }}
            className={styles.card}
            key={index}>
            {/* Card Left section details */}
            <div className={`${styles.leftSection}`}>
              {card.rank === 1 ? (
                <span className={`${styles.tag} ${styles.shimmer}`}>
                  <CiTrophy className={styles.trophyIcon} size={20} />
                  <span>Best Choice</span>
                </span>
              ) : card.rank === 2 ? (
                <span className={`${styles.tag} ${styles.shimmer}`}>
                  <IoDiamondOutline className={styles.trophyIcon} size={20} />
                  <span>Best Value</span>
                </span>
              ) : null}
              <p className={styles.rank}>{card.rank}</p>
              <Image
                src={card.image}
                alt={card.title}
                width={700}
                height={700}
                className={styles.image}
              />
              <p className={styles.imageLabel}>{card.imageLabel}</p>
            </div>

            {/* Card Center section details */}
            <div className={styles.centerSection}>
              <h3 className={styles.title}>
                {card.title}
                <span className={styles.contextText}>{card.context}</span>
              </h3>
              {card.off ? (
                <span className={styles.off}>{card.off}% off</span>
              ) : null}
              <p className={styles.highlight}>Main highlights</p>
              {card.highlights ? (
                <div className={styles.timeStamps}>
                  {card.timeStamps.map((time, index) => {
                    return (
                      <div key={index} className={styles.timeStamp}>
                        <span className={styles.time}>{time.time}</span>
                        <span className={styles.title}>{time.title}</span>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              <p className={styles.desc}>{card.desc}</p>
              {card.checkBox
                ? card.checkBox.map((check, index) => {
                    return (
                      <div key={index} className={styles.checkBox}>
                        <Image
                          src="/images/checkbox.png"
                          alt="check"
                          width={20}
                          height={20}
                          className={styles.checkImage}
                        />
                        <span className={styles.checkTitle}>{check.title}</span>
                      </div>
                    );
                  })
                : null}
              <span className={styles.showmore} onClick={handleSumbit}>
                Show more
                <RiArrowDropDownLine size={20} />
              </span>
            </div>

            {/* Card Right section details */}
            <div className={styles.rightSection}>
              <div className={styles.rating}>
                <span className={styles.ratingDetails}>
                  <CiCircleInfo className={styles.infoIcon} title="Info" />
                  <p className={styles.ratingValue}>
                    <CountUp isCounting end={card.rating} duration={2.75} />
                  </p>
                  <p className={styles.ratingTitle}>{card.reviewTitle}</p>
                </span>
                <div className={styles.ratingStars}>
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <img
                        src={
                          i < card.ratingStars
                            ? "/images/star.svg"
                            : "/images/empty-star.svg"
                        }
                        alt="star"
                        className={styles.star}
                        key={i}
                      />
                    ))}
                </div>
              </div>
              <button className={styles.button} onClick={handleSumbit}>
                View
              </button>
            </div>
          </m.div>
        );
      })}
      <ToastContainer />
    </LazyMotion>
  );
};

export default Card;
