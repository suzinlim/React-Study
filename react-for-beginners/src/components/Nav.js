import React from "react";
import styles from "../components/Nav.module.css";

function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        MOVIE
      </div>
    </div>
  );
};

export default Nav;