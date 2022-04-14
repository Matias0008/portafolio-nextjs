import React from "react";
import styles from "./inicio.module.scss";
export const Titulo = () => {
  return (
    <h1 className={styles.titulo}>
      <span className={styles.titulo_content}>Hola,</span>
      <span className={styles.titulo_content + " " + styles.titulo_segundo}>
        Soy
      </span>
      <span className={styles.titulo_content + " " + styles.titulo_tercero}>
        Matias Delgado
      </span>
    </h1>
    // <div className={styles.titulo
    //   <h1>
    //     Hola, <span></span>
    //   </h1>
    //   <h1>
    //     Soy <span></span>
    //   </h1>
    //   <h1>
    //     Matias gado <span></span>
    //   </h1>
    // </div>
  );
};
