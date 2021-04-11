import React from "react";
import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <>
      <img
        className={styles.photo}
        src="https://github.com/bfpimentel.png?size=200"
        alt="Profile Picture"
      />
      <h2 className={styles.title}>Bruno Pimentel</h2>
      <h3 className={styles.short_description}>
        Self-taught. Adaptable. Challenge seeker.
      </h3>
    </>
  );
}

export default Header;
