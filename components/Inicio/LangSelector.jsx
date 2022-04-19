import React from "react";
import Image from "next/image";

import { LengContext } from "context/lengContext";
import { useContext } from "react";

import us from "public/img/leng/us.svg";
import es from "public/img/leng/es.svg";

import styles from "./inicio.module.scss";

export const LangSelector = () => {
  const { handleLeng, lenguaje, leng } = useContext(LengContext);
  return (
    <div className={styles.langdiv}>
      <button className={styles.lang_btn} onClick={() => handleLeng("es")}>
        <Image
          src={es}
          width={60}
          height={60}
          quality={100}
          layout="intrinsic"
          className={leng === "es" ? styles.lang_selected : ""}
        />
      </button>
      <button className={styles.lang_btn} onClick={() => handleLeng("en")}>
        <Image
          src={us}
          width={60}
          height={60}
          quality={100}
          layout="intrinsic"
          className={leng === "en" ? styles.lang_selected : ""}
        />
      </button>
    </div>
  );
};
