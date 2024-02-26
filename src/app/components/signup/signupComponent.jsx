"use client";

// Required Libraries and Components
import React, { useState } from "react";
import styles from "./signupComponent.module.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email === "") {
      toast("Please enter your email", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (
      email.split("@").length !== 2 ||
      email.split("@")[1].split(".").length !== 2
    ) {
      toast("Please enter a valid email", {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Thank you for signing up!", {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={styles.container}>
      <h3>Sign up and get exclusive special deals</h3>
      <div className={styles.inputContainer}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign up</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupComponent;
