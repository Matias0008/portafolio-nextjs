import React, { useContext } from "react";

import { LengContext } from "context/lengContext";

import proyectos_es from "json/proyectos_es.json";
import proyectos_en from "json/proyectos_en.json";

import { Layout } from "components/Layout";

import { ProyectosGrid } from "./ProyectosGrid";

import styles from "./proyectos.module.scss";

export const Proyectos = () => {
  const { lenguaje, leng } = useContext(LengContext);
  const { proyectos } = lenguaje;

  const proyecto_used = leng === "es" ? proyectos_es : proyectos_en;
  return (
    <Layout id={styles.proyectos} heading={proyectos.heading}>
      <div className={styles.all_items}>
        <ProyectosGrid data={proyecto_used} leng={leng} />
      </div>
    </Layout>
  );
};
