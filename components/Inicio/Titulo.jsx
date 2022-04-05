import React from "react";
import styles from "./inicio.module.scss";

export const Titulo = () => {
  return (
    <div className={styles.titulo}>
      <h1>
        Hola, <span></span>
      </h1>
      <h1>
        Soy <span></span>
      </h1>
      <h1>
        Matias Delgado <span></span>
      </h1>
    </div>
  );
};
