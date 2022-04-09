import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";

import { Layout } from "components/Layout";
import imagen from "public/img/about-photo.webp";

import { BsInstagram, BsGithub } from "react-icons/bs";

import styles from "./sobre-mi.module.scss";

export const SobreMi = () => {
  return (
    <Layout id={styles.sobre_mi} heading="Sobre mi">
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
              <p>
                Desarrollador web principiante, de Argentina. Principalmente
                autodidacta, disfruto programar y progresar día tras día.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.desc}>
            <h2 className={styles.nombre}>Matias Delgado</h2>
            <h2 className={styles.title}>Estudiante y autodidacta</h2>
            <p className={styles.desc_p}>
              Estoy estudiando la carrera Ing. en Sistemas. Dispuesto a dar todo
              de mi con el fin de superarme día tras día en este increible mundo
              de la programación. Aspiro a desarrollar mis aptitudes, obtener
              una posición para participar y colaborar a mi experiencia.
              Constantemente me encuentro aprendiendo y desarrollando
              aplicaciones por placer.
            </p>
            <div className={styles.social}>
              <div>
                <Link
                  to="contacto"
                  className={styles.button}
                  smooth={false}
                  offset={-85}
                >
                  Contacto
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
