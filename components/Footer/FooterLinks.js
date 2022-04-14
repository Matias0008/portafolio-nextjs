import React from "react";

import { Link } from "react-scroll";
import { Links } from "../Navbar/NavElements";

import styles from "./footer.module.scss";

export const FooterLinks = () => {
  return (
    <>
      {Links.map(({ name, href }) => {
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
              {name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
