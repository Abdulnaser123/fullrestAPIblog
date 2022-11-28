import React from "react";
import styles from "./style.module.css";

const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <button className={styles.firstFilterButton}>Ascending by Date </button>
      <button className={styles.filterItem}>Descending by Date </button>
      <button className={styles.filterItem}>Ascending by Like </button>
      <button className={styles.lastFilterButton}>Descending by Like </button>
    </div>
  );
};

export default Filter;
