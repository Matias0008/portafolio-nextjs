import React from "react";
import { useContext } from "react";

import { LengContext } from "context/lengContext";
import { Layout } from "components/Layout";
import { LenguajesData } from "data/lenguajes";
import { LenguajesGrid } from "./LenguajesGrid";

import styles from "./lenguajes.module.scss";

export const Lenguajes = () => {
  const { lenguaje } = useContext(LengContext);
  const { lenguajes } = lenguaje;
  return (
    <Layout id={styles.lenguajes} heading={lenguajes.heading}>
      <div className={styles.wrapper}>
        {LenguajesData.map((l) => {
          return <LenguajesGrid {...l} key={l.id} />;
        })}
      </div>
    </Layout>
  );
};
