"use client";
import styles from "./card.module.scss";
import CardDetails from "./cardDetails";
import { CiCircleInfo, CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

const Card = () => {
  const handleSumbit = () => {
    alert("Coming soon!");
  };

  return (
    <>
      {CardDetails.map((card, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.leftSection}>
              {card.rank === 1 ? (
                <span className={styles.tag}>
                  <CiTrophy className={styles.trophyIcon} size={20} />
                  <span>Best Choice</span>
                </span>
              ) : card.rank === 2 ? (
                <span className={styles.tag}>
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
            <div className={styles.rightSection}>
              <div className={styles.rating}>
                <span className={styles.ratingDetails}>
                  <CiCircleInfo className={styles.infoIcon} title="Info" />
                  <p className={styles.ratingValue}>{card.rating}</p>
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
          </div>
        );
      })}
    </>
  );
};

export default Card;
