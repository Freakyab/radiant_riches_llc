"use client";

import styles from "./signupComponent.module.scss";
import React, {useState} from "react";

const SignupComponent = () => {
    const [email, setEmail] = useState("");
  return (
    <div className={styles.container}>
      <h3>Sign up and get exclusive special deals</h3>
      <div className={styles.inputContainer}>

      <input type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={() => {
          alert("You have successfully signed up!");
          setEmail("");
        }}
      >Sign up</button>
      </div>
    </div>
  );
};

export default SignupComponent;
