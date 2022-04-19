import React from "react";

import { LengContext } from "context/lengContext";
import { useContext } from "react";

import { Layout } from "components/Layout";
import { Formulario } from "./Formulario";

import styles from "./contacto.module.scss";

export const Contacto = () => {
  const { lenguaje, leng } = useContext(LengContext);
  const { contacto } = lenguaje;

  return (
    <Layout id={styles.contacto} heading={contacto.heading}>
      <Formulario lenguaje={lenguaje} leng={leng} />
    </Layout>
  );
};
