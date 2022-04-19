import React from "react";

import { Layout } from "components/Layout";
import { FooterLinks } from "./FooterLinks";

import { BsInstagram, BsGithub } from "react-icons/bs";

import { LengContext } from "context/lengContext";
import { useContext } from "react";

import styles from "./footer.module.scss";

export const Footer = () => {
  const { handleLeng, lenguaje } = useContext(LengContext);
  const { footer } = lenguaje;

  return (
    <Layout id={styles.footer}>
      <footer className={styles.footer}>
        <div className={styles.footer_item}>
          <div className={styles.item_desc + " " + styles.item}>
            {footer.despedida}
          </div>
          <div className={styles.item_ciudad + " " + styles.item}>
            <a
              href="https://www.google.com/maps/place/Villa+Mar%C3%ADa,+C%C3%B3rdoba/data=!4m2!3m1!1s0x95cc42fb51306dc1:0xbfb3fffbd425c6b1?sa=X&amp;ved=2ahUKEwjU4LW51uP1AhXWHbkGHULTCYQQ8gF6BAgfEAE "
              target="_blank rel='noopener noreferrer'"
            >
              Villa María, Córdoba, Argentina
            </a>
          </div>
          <div className={styles.item_links + " " + styles.item}>
            <a
              href="https://www.instagram.com/mmatidelga2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              className={styles.last_link}
              href="https://github.com/Matias0008"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className={styles.footer_item}>
          <ul className={styles.footer_link}>
            <FooterLinks />
          </ul>
        </div>
      </footer>
    </Layout>
  );
};
