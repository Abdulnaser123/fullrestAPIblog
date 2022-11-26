import React from "react";
import styles from "./styles.module.css";
const Navbar = () => {
  const NavbarTitles = ["Author", "Most Liked Posts", "Most Comment Post"];
  return (
    <div className={styles.Navbar}>
      <p className={styles.Logo}>JSOM</p>
      <ul className={styles.NavbarItems}>
        {NavbarTitles.map((item) => {
          return <li className={styles.NavbarItem}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
