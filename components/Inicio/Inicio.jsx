import React, { useState, useEffect } from "react";

import { Titulo } from "./Titulo";
import { Layout } from "components/Layout";

import styles from "./inicio.module.scss";
import { LangSelector } from "./LangSelector";

export const Inicio = () => {
  return (
    <>
      <Layout
        flex
        direction={"column"}
        gap={"20px"}
        id={styles.inicio}
        subchilden={<LangSelector />}
      >
        <Titulo />
      </Layout>
    </>
  );
};
