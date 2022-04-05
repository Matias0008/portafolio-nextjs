import React from "react";

import styles from "./inicio.module.scss";

export const ScrollDown = () => {
  return (
    <div className={styles.scroll_down}>
      <div className={styles.wrapper}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
