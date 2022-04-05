import React from "react";

import { Layout } from "../Layout";

import { ProyectosGrid } from "./ProyectosGrid";
import { ProyectosData } from "../../data/proyectos.js";

import styles from "./proyectos.module.scss";

export const Proyectos = () => {
  return (
    <Layout id={styles.proyectos} heading="Proyectos">
      <div className={styles.all_items}>
        <ProyectosGrid data={ProyectosData} />;
      </div>
    </Layout>
  );
};
