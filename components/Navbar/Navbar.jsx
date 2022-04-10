import React, { useEffect, useState } from "react";

import { useScroll } from "hooks/useScroll";
import { Container } from "components/Layout";
import { NavElements } from "./NavElements";

import { FaSun, FaMoon } from "react-icons/fa";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  const [state, setState] = useState({
    clicked: false,
    theme: null,
  });
  const { scroll, height } = useScroll();

  useEffect(() => {
    setState({
      ...state,
      theme: localStorage.getItem("theme") || "light",
    });
  }, []);

  useEffect(() => {
    state.clicked
      ? document.body.classList.add("block-scroll")
      : document.body.classList.remove("block-scroll");
  }, [state.clicked]);

  useEffect(() => {
    if (state.theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const handleClick = () => {
    setState({
      ...state,
      clicked: !state.clicked,
    });
  };

  const handleTheme = () => {
    setState({
      ...state,
      theme: state.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <>
      <header
        className={
          scroll >= height
            ? styles.header + " " + styles.header_ondown
            : styles.header + " " + styles.header_ontop
        }
      >
        <Container height={100}>
          <nav className={styles.nav}>
            <div className={styles.toggle}>
              <button className={styles.nav_toggle} onClick={handleClick}>
                {state.clicked ? <VscChromeClose /> : <VscThreeBars />}
              </button>
            </div>
            <ul
              className={state.clicked ? styles.nav_visible : styles.nav_menu}
            >
              <NavElements handleClick={handleClick} clicked={state.clicked} />
            </ul>
            <div className={styles.tema}>
              <button
                className={`${styles.switch} ${
                  state.theme === "dark" ? styles.active : ""
                }`}
                onClick={handleTheme}
              >
                <span>
                  <FaSun />
                </span>
                <span>
                  <FaMoon />
                </span>
              </button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};
