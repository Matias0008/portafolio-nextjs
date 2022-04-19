import React from "react";
import { Link } from "react-scroll";

import { LengContext } from "context/lengContext";
import { useContext } from "react";

import inicio from "../Inicio/inicio.module.scss";
import sobre_mi from "../Sobre-mi/sobre-mi.module.scss";
import lenguajes from "../Lenguajes/lenguajes.module.scss";
import proyectos from "../Proyectos/proyectos.module.scss";
import contactos from "../Contacto/contacto.module.scss";

export const Links = [
  {
    name: "Inicio",
    href: inicio.inicio,
  },
  {
    name: "Sobre mi",
    href: sobre_mi.sobre_mi,
  },
  {
    name: "Lenguajes",
    href: lenguajes.lenguajes,
  },
  {
    name: "Proyectos",
    href: proyectos.proyectos,
  },
  {
    name: "Contacto",
    href: contactos.contacto,
  },
];

export const NavElements = ({ handleClick, clicked }) => {
  const { lenguaje } = useContext(LengContext);

  return (
    <>
      {Links.map(({ name, href }) => {
        let nameNormalized = name.toLowerCase().replace(" ", "");
        return (
          <li className="nav_menu_item" key={name}>
            <Link
              activeClass="active"
              to={href}
              spy={true}
              smooth={true}
              offset={-85}
              spyThrottle={0}
              className="nav_menu_link"
              onClick={clicked ? handleClick : undefined}
            >
              {lenguaje.navbar[nameNormalized]}
            </Link>
          </li>
        );
      })}
    </>
  );
};
