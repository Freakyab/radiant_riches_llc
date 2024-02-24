import React from "react";
import CardDetails from "../cardSlider/cardDetails";
import styles from "./cardSlider.module.scss";
const cardSlider = () => {
  return (
    <div className={styles.container}>
        <h2>Related deals you might like for</h2>
      <div className={styles.cardSlider}>
        {CardDetails.map((card, index) => {
          return (
            <div key={index} className={styles.cards}>
              <div className={styles.image}>
                <img src={card.image} alt={card.title} />
              </div>
                <div className={styles.tagsBlock}>
                  {card.tags.map((tag, index) => {
                    return <span key={index} className={styles.tags}>{tag}</span>;
                  })}
                </div>
              <div className={styles.cardDetails}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p>{card.details}</p>
                <div>
                  <span className={styles.price}>{card.price}</span>
                  <span className={styles.actualPrice}>{card.actualPrice}</span>
                  <span className={styles.discount}>{`(${card.tags[0]})`}</span>
                </div>
                <button className={styles.viewDetails}>
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default cardSlider;
