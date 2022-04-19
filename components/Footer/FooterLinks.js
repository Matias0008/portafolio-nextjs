import React from "react";

import { LengContext } from "context/lengContext";
import { useContext } from "react";

import { Link } from "react-scroll";
import { Links } from "../Navbar/NavElements";

import styles from "./footer.module.scss";

export const FooterLinks = () => {
  const { lenguaje } = useContext(LengContext);

  return (
    <>
      {Links.map(({ name, href }) => {
        let nameNormalized = name.toLowerCase().replace(" ", "");
        return (
          <li className="nav-menu-item" key={name}>
            <Link
              activeClass="active"
              to={href}
              spy={true}
              smooth={true}
              offset={-85}
              ignoreCancelEvents={true}
              spyThrottle={0}
              className={styles.footer_link}
            >
              {lenguaje.navbar[nameNormalized]}
            </Link>
          </li>
        );
      })}
    </>
  );
};
