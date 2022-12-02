import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavbarTitles = ["Author", "Most Liked Posts", "Most Comment Post"];
  const NavData = [
    { id: 1, title: "Author", path: "/" },
    { id: 2, title: "Most Liked Posts", path: "/likes" },
    { id: 3, title: "Most Comment Post", path: "/comments" },
  ];
  return (
    <div className={styles.Navbar}>
      <Link to="/" className={styles.Logo}>
        JSON
      </Link>
      <ul className={styles.NavbarItems}>
        {NavData.map((item,index) => {
          return (
            <Link to={item.path} className={styles.NavbarItem}>
              <li key={index}>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
