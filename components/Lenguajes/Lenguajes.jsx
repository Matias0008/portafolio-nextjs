import React from "react";

import { Layout } from "../Layout";
import { LenguajesGrid } from "./LenguajesGrid";
import { LenguajesData } from "../../data/lenguajes";

import styles from "./lenguajes.module.scss";

export const Lenguajes = () => {
  return (
    <Layout id={styles.lenguajes} heading="Lenguajes">
      <div className={styles.wrapper}>
        {LenguajesData.map((l) => {
          return <LenguajesGrid {...l} key={l.id} />;
        })}
      </div>
    </Layout>
  );
};
