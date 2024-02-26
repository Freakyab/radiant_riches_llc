// Request for the user to select an option
import styles from "./button.module.scss";
import options from "./optionButtonDetails";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OptionButton = () => {

  const handleSubmit = () => {
    toast("Coming soon!");
  };

  return (
    <div className={styles.category}>
      {options.map((option, index) => {
        return (
          <button key={index} className={styles.btn}
            onClick={handleSubmit}
          >
            {option}
          </button>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default OptionButton;
