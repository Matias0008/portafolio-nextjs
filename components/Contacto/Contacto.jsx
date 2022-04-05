import React from "react";

import { Formulario } from "./Formulario";
import { Layout } from "../Layout";

import styled from "./contacto.module.scss";

export const Contacto = () => {
  return (
    <Layout id={styled.contacto} heading="Contacto">
      <Formulario />
    </Layout>
  );
};
