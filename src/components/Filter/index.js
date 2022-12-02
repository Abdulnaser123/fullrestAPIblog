import React from "react";
import styles from "./style.module.css";

const Filter = ({ activeButton, ascDate, dscDate, ascLike, dscLike }) => {
  return (
    <div className={styles.filterContainer}>
      <button className={styles.firstFilterButton} onClick={ascDate}>
        Ascending by Date
      </button>
      <button className={styles.filterItem} onClick={dscDate}>
        Descending by Date
      </button>
      <button className={styles.filterItem} onClick={ascLike}>
        Ascending by Like
      </button>
      <button className={styles.lastFilterButton} onClick={dscLike}>
        Descending by Like
      </button>
    </div>
  );
};

export default Filter;
