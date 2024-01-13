import React from "react";
import styles from "./emailLink.module.scss";

function EmailLink() {
  return (
    <div className={styles.wrapperContainer}>
      <p>benhlel.slim@gmail.com</p>
      <svg
        width="200"
        height="6"
        viewBox="0 0 200 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M199.667 2.98618C199.659 1.51344 198.459 0.325738 196.986 0.333369C195.513 0.341 194.326 1.54108 194.333 3.01382C194.341 4.48656 195.541 5.67426 197.014 5.66663C198.487 5.659 199.674 4.45892 199.667 2.98618ZM196.997 2.50001L0.997487 3.51555L1.00267 4.51554L197.003 3.49999L196.997 2.50001Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default EmailLink;
