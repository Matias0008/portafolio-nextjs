import React from "react";

import { Layout } from "components/Layout";
import { Formulario } from "./Formulario";

import styles from "./contacto.module.scss";

export const Contacto = () => {
  return (
    <Layout id={styles.contacto} heading="Contacto">
      <Formulario />
    </Layout>
  );
};
