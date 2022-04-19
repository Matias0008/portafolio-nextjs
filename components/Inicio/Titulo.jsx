import React from "react";

import { LengContext } from "context/lengContext";
import { useContext } from "react";

import styles from "./inicio.module.scss";

export const Titulo = () => {
  const { lenguaje } = useContext(LengContext);

  return (
    <h1 className={styles.titulo}>
      <span className={styles.titulo_content}>
        {lenguaje.inicio.titulo_content_1}
      </span>
      <span className={styles.titulo_content + " " + styles.titulo_segundo}>
        {lenguaje.inicio.titulo_content_2}
      </span>
      <span className={styles.titulo_content + " " + styles.titulo_tercero}>
        {lenguaje.inicio.titulo_content_3}
      </span>
    </h1>
  );
};
