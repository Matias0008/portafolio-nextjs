import React from "react";
import Image from "next/image";

import styles from "./proyectos.module.scss";

export const ProyectosGrid = ({ data }) => {
  return data.map(({ titulo, subtitulo, descripcion, url, imagen, id }) => {
    return (
      <div className={styles.item} key={id}>
        <div className={styles.left}>
          <div className={styles.img}>
            <Image
              src={imagen}
              alt={titulo}
              objectFit={"cover"}
              quality={100}
              objectPosition={"30% 70%"}
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={styles.project_title}>{titulo}</h2>
          <h3 className={styles.project_subtitle}>{subtitulo}</h3>
          <p className={styles.project_desc}>{descripcion}</p>
          <div className={styles.button}>
            <a
              href={`${url}`}
              target={"_blank"}
              rel="noreferrer"
              className={
                styles.btn_primary +
                " " +
                styles.outline +
                " " +
                styles.external_link
              }
            >
              <span>Ver web</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={styles.svg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  });
};
