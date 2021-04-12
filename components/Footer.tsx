import React from "react";
import SocialButton from "@/components/SocialButton";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github.png";
import styles from "@/styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialButton
        imgSrc={linkedin}
        link="https://linkedin.com/in/bfpimentel/"
      />
      <SocialButton imgSrc={github} link="https://github.com/bfpimentel/" />
    </footer>
  );
}

export default Footer;
