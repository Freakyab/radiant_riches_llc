"use client";

import styles from "./signupComponent.module.scss";
import React, { useState } from "react";

const SignupComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email === "") {
      alert("Please enter your email");
    } else if (
      email.split("@").length !== 2 ||
      email.split("@")[1].split(".").length !== 2
    ) {
      alert("Please enter a valid email");
    } else {
      alert("Thank you for signing up");
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
    </div>
  );
};

export default SignupComponent;
