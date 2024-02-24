import styles from "./button.module.scss";
import React from "react";
import options from "./optionButtonDetails";
const OptionButton = () => {
  return (
    <div className={styles.category}>
      {options.map((option, index) => {
        return (
          <button key={index} className={styles.btn}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default OptionButton;
