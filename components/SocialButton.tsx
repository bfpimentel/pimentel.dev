import React from "react";
import styles from "@/styles/SocialButton.module.css";

type SocialButtonProps = {
  link: string;
  imgSrc: string;
};

function SocialButton({ link, imgSrc }: SocialButtonProps) {
  return (
    <button className={styles.social_button}>
      <a href={link}>
        <img src={imgSrc} />
      </a>
    </button>
  );
}

export default SocialButton;
