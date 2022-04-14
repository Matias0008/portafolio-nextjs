import React from "react";

import styles from "./proyectos.module.scss";

export const ProyectosLoading = () => {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.left}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.project_title_loading}></h2>
          <h3 className={styles.project_subtitle_loading}></h3>
          <p className={styles.project_desc_loading}></p>
          <div className={styles.button}>
            <a></a>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.left}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.project_title_loading}></h2>
          <h3 className={styles.project_subtitle_loading}></h3>
          <p className={styles.project_desc_loading}></p>
          <div className={styles.button}>
            <a></a>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.left}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.project_title_loading}></h2>
          <h3 className={styles.project_subtitle_loading}></h3>
          <p className={styles.project_desc_loading}></p>
          <div className={styles.button}>
            <a></a>
          </div>
        </div>
      </div>
    </>
  );
};
