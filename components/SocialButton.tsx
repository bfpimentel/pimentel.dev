import React from "react";
import linkedin from "@/assets/linkedin.png";
import styles from "@/styles/SocialButton.module.css";

function SocialButton() {
  return (
    <button className={styles.social_button}>
      <a href="https://www.linkedin.com/in/bfpimentel/">
        <img src={linkedin} />
      </a>
    </button>
  );
}

export default SocialButton;
