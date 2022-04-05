import React from "react";

import styles from "./lenguajes.module.scss";
import Image from "next/image";

export const LenguajesGrid = ({ id, title, url }) => {
  return (
    <div className={styles.wrapper_item}>
      <Image src={url} alt={title} width={110} height={110} />
      <h2 className={styles.item_title}>{title}</h2>
    </div>
  );
};
