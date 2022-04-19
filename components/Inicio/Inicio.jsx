import React from "react";

import { Titulo } from "./Titulo";
import { ScrollDown } from "./ScrollDown";
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
        {/* <ScrollDown /> */}
      </Layout>
    </>
  );
};
