import Head from "next/head";

import { Inicio } from "../components/Inicio/Inicio";
import { Lenguajes } from "../components/Lenguajes/Lenguajes";
import { Navbar } from "../components/Navbar/Navbar";
import { Proyectos } from "../components/Proyectos/Proyectos";
import { SobreMi } from "../components/Sobre-mi/SobreMi";
import { Contacto } from "../components/Contacto/Contacto";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matias Delgado | Portafolio</title>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="description"
          content="Portafolio de Matias Delgado, desarrollador web de Villa Maria, Cordoba, Argentina. Creado con React."
        />
      </Head>

      <main>
        <Navbar />
        <Inicio />
        <SobreMi />
        <Lenguajes />
        <Proyectos />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
