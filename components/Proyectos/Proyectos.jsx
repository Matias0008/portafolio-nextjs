import React from "react";

import { useFetch } from "hooks/useFetch";
import { Layout } from "components/Layout";
import { ProyectosGrid } from "./ProyectosGrid";
import { ProyectosLoading } from "./ProyectosLoading";

import styles from "./proyectos.module.scss";

export const Proyectos = () => {
  const { data, loading } = useFetch(process.env.API_URL);

  if (loading) {
    return (
      <Layout id={styles.proyectos} heading="Proyectos">
        <div className={styles.all_items}>
          <ProyectosLoading />
        </div>
      </Layout>
    );
  }

  return (
    <Layout id={styles.proyectos} heading="Proyectos">
      <div className={styles.all_items}>
        <ProyectosGrid data={data} />
      </div>
    </Layout>
  );
};
