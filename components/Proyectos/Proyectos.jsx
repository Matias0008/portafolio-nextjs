import React from "react";

import { useFetch } from "hooks/useFetch";
import { Layout } from "components/Layout";
import { ProyectosGrid } from "./ProyectosGrid";

import styles from "./proyectos.module.scss";

export const Proyectos = () => {
  const { data, loading } = useFetch(
    "https://md-portafolio-api.herokuapp.com/proyectos/"
  );

  if (loading) {
    return "Loading";
  }

  return (
    <Layout id={styles.proyectos} heading="Proyectos">
      <div className={styles.all_items}>
        <ProyectosGrid data={data} />;
      </div>
    </Layout>
  );
};
