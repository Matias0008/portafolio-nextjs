import React from "react";
import { Link } from "react-scroll";
import { useContext } from "react";

import Image from "next/image";

import { LengContext } from "context/lengContext";
import { Layout } from "components/Layout";
import imagen from "public/img/about-photo.webp";

import { BsInstagram, BsGithub } from "react-icons/bs";

import styles from "./sobre-mi.module.scss";
import stylescontacto from "../Contacto/contacto.module.scss";

export const SobreMi = () => {
  const { lenguaje } = useContext(LengContext);
  const { sobremi } = lenguaje;

  return (
    <Layout id={styles.sobre_mi} heading={sobremi.heading}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image
                src={imagen}
                alt="Matias Delgado foto"
                width={120}
                height={120}
                objectFit={`cover`}
              />
            </div>
            <div className={styles.card_desc}>
              <p>{sobremi.desc}</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.desc}>
            <h2 className={styles.nombre}>Matias Delgado</h2>
            <h2 className={styles.title}>{sobremi.subtitulo}</h2>
            <p className={styles.desc_p}>{sobremi.longdesc}</p>
            <div className={styles.social}>
              <div>
                <Link
                  to={stylescontacto.contacto}
                  className={styles.button}
                  smooth={true}
                  offset={-85}
                >
                  {sobremi.btn_contacto}
                </Link>
              </div>
              <a
                href="https://www.instagram.com/mmatidelga2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://github.com/Matias0008"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
